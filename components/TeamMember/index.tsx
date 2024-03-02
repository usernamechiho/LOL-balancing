"use client";

import { MEMBER_LIST } from "@/constant";
import { Member } from "@/types";
import { useState } from "react";

import styles from "./index.module.scss";
import { useCountUp } from "@/hooks";

export default function TeamMember() {
  const [participant, setParticipant] = useState<Member[]>([]);

  const join = (member: Member) => {
    const { name } = member;

    if (Boolean(participant.find((v) => v.name === name))) {
      setParticipant(participant.filter((v) => v.name !== name));

      return;
    }

    if (participant.length === 8) {
      alert("8명 이상으로 팀을 구성할 수 없습니다.");

      return;
    }

    setParticipant([...participant, member]);
  };

  const disabled = (name: string) => {
    return Boolean(participant.find((v) => v.name === name));
  };

  const getRandomObjectsWithRemaining = (arr: Member[], count: number) => {
    const shuffled = arr.slice().sort(() => Math.random() - 0.5);
    const selected = shuffled.slice(0, count);
    const remaining = shuffled.slice(count);
    return { selected, remaining };
  };

  const { selected, remaining } = getRandomObjectsWithRemaining(participant, 4);

  const count = useCountUp(25, 5000);

  return (
    <div>
      {MEMBER_LIST.map((v) => {
        return (
          <a
            key={v.name}
            className={disabled(v.name) ? styles.a : styles.disabled}
            onClick={() => {
              return v.name === "손님" ? {} : join(v);
            }}
          >
            <span></span>
            {v.name}
          </a>
        );
      })}
      전투력: {count}
    </div>
  );
}
