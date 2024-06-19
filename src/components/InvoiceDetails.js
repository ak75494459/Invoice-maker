import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function InvoiceDetails() {
    const d = new Date();

    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = d.toLocaleDateString(undefined, options);
    return (
        <article className="my-5 flex items-end justify-end mb-5">
            <ul>
                <li><span className="font-bold">Invoicer number:{uuidv4()}</span></li>
                <li><span className="font-bold">Invoice date:{formattedDate}</span></li>
            </ul>
        </article>
    )
}
