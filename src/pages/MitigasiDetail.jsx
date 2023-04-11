import { instance } from '../apis/axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import React from 'react';

const MitigasiDetail = () => {

    const { id } = useParams();
    const [mitigasi, setMitigasi] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);

        async function getMitigasiById() {
            const { data: { attributes } } = await instance.get(`/mitigasi/bencana/${id}`)
                .then((response) => response.data)
                .catch((error) => {
                    console.log(error);
                });
            setIsLoading(false);
            setMitigasi(attributes);
        }


        getMitigasiById();
    }, []);

    return isLoading ? (
        <div>
            <p className='text-danger'>Loading...</p>
        </div>
    ) : (
        <div className="container py-5">
            <div className='text-start'>
                <p>Buku Panduan Edukasi Kebencanaan</p>
                <p className='fw-bold fs-3'>{mitigasi.title}</p>
                <p className='fs-6'>{new Date(
                    mitigasi.created_at
                ).toLocaleDateString('id-ID', {
                    dateStyle: 'full',
                })}</p>
            </div>
            <div>
                {mitigasi.jenis_konten === 'pdf' ? (
                    <iframe src={`http://localhost:8000/mitigasi/${mitigasi.file}`} width={500} height={500} style={{ width: '100%' }}></iframe>
                ) : (
                    <video controls className="w-100">
                        <source src={`http://localhost:8000/mitigasi/${mitigasi.file}`} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>
        </div>
    )
}

export default MitigasiDetail