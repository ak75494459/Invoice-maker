import React from 'react'
import html2pdf from 'html2pdf.js';

export default function Header() {

    const handlePrint = () => {
        window.print()
    }

    const handleDownloadPDF = () => {

        var opt = {
            margin: 1,
            filename: 'bill.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 3 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
            pagebreak: { mode: 'avoid-all' }
        };
        const element = document.getElementById('invoice-content');

        html2pdf().from(element).set(opt).save();
    };
    return (
        <>
            <header className="flex flex-col items-center justify-center mb-5 xl:flex-row xl:justify-between">

                <div>
                    <ul className="flex items-center gap-3">
                        <li><button className="bg-blue-500 text-white font-bold py-2 px-8 rounded hover:border-2 hover:bg-transparent hover:text-blue-500 transition-all duration-300" onClick={handlePrint}>Print</button></li>
                        <li>
                            <button className="bg-blue-500 text-white font-bold py-2 px-8 rounded hover:border-2 hover:bg-transparent hover:text-blue-500 transition-all duration-300" onClick={handleDownloadPDF}>Download</button>
                        </li>

                    </ul>
                </div>
            </header>
        </>
    )
}
