import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredApplication } from '../../utility/localStorage';
import MarkedData from './MarkedData';
import Footer from "../Footer/Footer";

const Marked = () => {
    const markItem = useLoaderData();
    const [mark, setMark] = useState([]);

    useEffect(() => {
        const storedItem = getStoredApplication();
        if (markItem.length > 0) {
            const markedItem = markItem.filter(item => storedItem.includes(item.id));
            setMark(markedItem)
        }
    }, [markItem])

    return (
        <div>
            <div className='min-h-screen container mx-1 lg:mx-auto mb-5'>
                <h2 className='text-center text-3xl font-bold my-8 py-8 rounded-xl text-[#1c1c1c] bg-[#f3f3f3]'>Marked List</h2>
                <p className='border-b pl-1 text-lg font-medium text-black/60'>Marked : {mark.length}</p>
                {
                    mark.map(aMark => <MarkedData aMark={aMark} key={aMark.id}></MarkedData>)
                }

            </div>
            <Footer></Footer>
        </div>
    );
};

Marked.propTypes = {

};

export default Marked;