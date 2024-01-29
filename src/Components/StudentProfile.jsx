export default function StudentProfile({ onCloseModal, studentData }) {
    return (
        <>
            <div className='wrapper absolute flex justify-center items-center top-0 left-0 bg-black/90  m-auto h-full w-full'>
                <div className='profile  max-h-[700px] max-w-[700px] p-5 rounded text-teal-600 bg-gray-800 '>
                    <button
                        onClick={onCloseModal}
                        className='bg-red-500 justify-items-end py-1 px-5 rounded  text-white hover:bg-red-400 my-2 transform duration-200'>
                        Close
                    </button>
                    <img
                        className='max-h-[400px] rounded-sm'
                        src={studentData.image}
                        alt={studentData.name}
                    />
                    <hr />
                    <h1 className='text-xl font-medium mt-4'>
                        Name : {studentData.name}
                    </h1>
                    <h1 className='text-xl font-medium mt-4'>
                        email : {studentData.email}
                    </h1>
                    <h1 className='text-xl font-medium mt-4'>
                        cell : {studentData.cell}
                    </h1>
                </div>
            </div>
        </>
    );
}

