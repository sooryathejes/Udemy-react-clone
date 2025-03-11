import React from "react";

type GroupItemsProps = {
    items: {
        title: string,
        items: string[]
    };
    index: number;
};

export default function GroupItems({ items, index }: GroupItemsProps) {
    return (
            <div >
                <h3 className="font-[U-bold] my-16">{items.title}</h3>

                <div className="pb-24 ">
                    {items.items.map((item, itemIndex) => (
                        <p key={itemIndex} className="font-[U-reg] text-14 pb-4">{item}</p>
                    ))}
                </div>
            </div>

    );
}; 