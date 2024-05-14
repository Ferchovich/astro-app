import { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div class="flex gap-x-3 items-center bg-red-400 p-5 rounded-full justify-center">
            <span>{count}</span>
            <button class="border px-4 py-2 text-tx rounded-3xl" onClick={() => setCount(count + 1)}>+</button>
            <button class="border px-4 py-2 text-tx rounded-3xl" onClick={() => setCount(count - 1)}>-</button>
        </div>
    )
}