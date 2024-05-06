"use client";

import styled from "styled-components";
import Link from "next/link";

const UL = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  gap: 1rem;
`;

export function Menu() {
  return (
    <nav>
      <UL>
        <li>
          <Link href="/">Home page for app 1</Link>
        </li>
        <li>
          <Link href="/internal">Internal page for app 1</Link>
        </li>
        <li>
          <Link href="/internal/sub">Sub page for app 1</Link>
        </li>

        <li>
          <a href="/other">Home page for app 2</a>
        </li>
        <li>
          <a href="/other/internal">Internal page for app 2</a>
        </li>
      </UL>
    </nav>
  );
}
