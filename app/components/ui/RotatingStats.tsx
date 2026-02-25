"use client";

import React, { useEffect, useMemo, useState } from "react";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import PaymentsOutlinedIcon from "@mui/icons-material/PaymentsOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";

import styles from "./RotatingStats.module.css";

type Stat = {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
  icon: React.ReactNode;
};

type CSSVars = React.CSSProperties & {
  ["--offset"]?: number;
  ["--abs-offset"]?: number;
  ["--direction"]?: number;
  ["--active"]?: number;
};

const stats: Stat[] = [
  {
    label: "Préstamos otorgados",
    value: 2485,
    prefix: "+",
    icon: <GroupsOutlinedIcon fontSize="large" />,
  },
  {
    label: "Monto acreditado",
    value: 2212,
    prefix: "$ ",
    suffix: " M",
    icon: <PaymentsOutlinedIcon fontSize="large" />,
  },
  {
    label: "Tiempo promedio de acreditación",
    value: 2,
    suffix: " horas",
    icon: <AccessTimeOutlinedIcon fontSize="large" />,
  },
];

function AnimatedNumber({ value, active }: { value: number; active: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!active) return;

    let start = 0;
    const duration = 1200;
    const step = value / (duration / 16);

    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        start = value;
        clearInterval(timer);
      }
      setDisplay(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [value, active]);

  const formatted = new Intl.NumberFormat("es-AR").format(active ? display : value);
  return <span>{formatted}</span>;
}

export default function RotatingStats() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((p) => (p + 1) % stats.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const ordered = useMemo(() => {
    const prev = (active - 1 + stats.length) % stats.length;
    const next = (active + 1) % stats.length;

    return [
      { stat: stats[prev], idx: prev, slot: -1 },
      { stat: stats[active], idx: active, slot: 0 },
      { stat: stats[next], idx: next, slot: 1 },
    ];
  }, [active]);

  return (
    <div className={styles.carousel}>
      {ordered.map(({ stat, idx, slot }) => {
        const abs = Math.abs(slot);
        const dir = slot === 0 ? 0 : slot > 0 ? 1 : -1;

        const styleVars: CSSVars = {
          ["--offset"]: slot,
          ["--abs-offset"]: abs,
          ["--direction"]: dir,
          ["--active"]: slot === 0 ? 1 : 0,
        };

        return (
          <div key={idx} className={styles.cardContainer} style={styleVars}>
            <div className={styles.card}>
              {slot === 0 && <span className={styles.topLine} />}

              <div className={styles.content}>
                <div className={styles.left}>
                  <div className={styles.value}>
                    {stat.prefix}
                    <AnimatedNumber value={stat.value} active={slot === 0} />
                    {stat.suffix}
                  </div>
                  <div className={styles.label}>{stat.label}</div>
                </div>

                <div className={styles.icon}>{stat.icon}</div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}