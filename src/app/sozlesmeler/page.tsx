'use client';

import React, { useState } from 'react';

const contracts = [
    {
        id: 'sozlesme1',
        title: 'Abonelik Sözleşmesi',
        description: 'Aparthus uygulaması için genel satış sözleşmesi.',
        file: '/sozlesmeler/abonelik-sozlesmesi.pdf',
    },
    {
        id: 'sozlesme2',
        title: 'Saha Satış Bağımsız Yüklenici Sözleşmesi',
        description: 'Performansa dayalı prim ödemelerine ilişkin sözleşme.',
        file: '/sozlesmeler/saha-satis-sozlesmesi.pdf',
    }
];

export default function ContractsPage() {
    return (
        <div className="bg-gray-50 min-h-full py-16">
            <div className="container mx-auto px-4 my-20">
                <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">Sözleşmeler</h1>
                <p className="text-lg text-gray-600 text-center mb-12">
                    Aşağıdaki bağlantılardan sözleşme detaylarına ulaşabilir ve PDF formatında indirebilirsiniz.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {contracts.map((contract) => (
                        <div
                            key={contract.id}
                            className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center"
                        >
                            <h3 className="text-xl font-bold text-gray-800 mb-2">{contract.title}</h3>
                            <p className="text-sm text-gray-600 text-center mb-4">
                                {contract.description}
                            </p>
                            <a
                                href={contract.file}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#FFD200] text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-[#FFD200]/90 transition"
                            >
                                PDF'i Görüntüle
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
