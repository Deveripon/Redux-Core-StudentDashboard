import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllStudents } from "../redux/actions";
import Student from "./Student";
import StudentAddModal from "./StudentAddModal";

export default function StudentList() {
    //manage student add modal
    const [isAddStudent, setisAddStudent] = useState(false);

    function handleModalShow() {
        setisAddStudent(true);
    }
    function handleModalClose() {
        setisAddStudent(false);
    }

    const dispatch = useDispatch();
    const students = useSelector((state) => state.students);
    useEffect(() => {
        dispatch(getAllStudents());
    }, [dispatch]);

    return (
        <>
            {isAddStudent && (
                <StudentAddModal onCloseModal={handleModalClose} />
            )}
            <section className='w-full section-container'>
                <div className=''>
                    <h2 className='m-auto text-2xl my-10 font-bold text-cyan-600'>
                        Our Students
                    </h2>
                    <div className='actions '>
                        <button
                            onClick={handleModalShow}
                            className='px-12 py-2 w-fit bg-green-600 my-2 hover:bg-green-800 transition duration-200  scale-100 active:scale-[.95] text-white rounded'>
                            Add New Students
                        </button>
                    </div>
                </div>

                <table className='w-full text-gray-200'>
                    <thead className='font-semibold text-md h-12 text-center align-middle border-t border-gray-500 *:border-r *:border-gray-500 bg-gray-600'>
                        <tr>
                            <td>#</td>
                            <td>Photo</td>
                            <td>Name</td>
                            <td>Email</td>
                            <td>cell</td>
                            <td>action</td>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {students.loading ? (
                            <tr>
                                <td>loading....</td>
                            </tr>
                        ) : students?.data?.length > 0 ? (
                            students.data.map((student) => {
                                return (
                                    <Student
                                        key={student.id}
                                        student={student}
                                    />
                                );
                            })
                        ) : (
                            <tr>
                                <td>No student found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </section>
        </>
    );
}

