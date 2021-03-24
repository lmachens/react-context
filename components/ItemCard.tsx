import React from "react";
import type { Item } from "../utils/types";
import Link from "next/link";

type ItemCardProps = {
  item: Item;
};

function ItemCard({ item }: ItemCardProps) {
  return (
    <div>
      <Link href={`/${item.name}`}>
        <a>
          {item.name} <b>${item.price}</b>
        </a>
      </Link>
    </div>
  );
}

export default ItemCard;
