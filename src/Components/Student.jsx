import { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import StudentAddModal from "../Components/StudentAddModal";
import { deleteSingleStudent } from "../redux/actions";
import StudentProfile from "./StudentProfile";
export default function Student({ student }) {
    const dispatch = useDispatch();

    //manage student add form
    const [edit, setEdit] = useState(false);
    //manage student profile view
    const [viewModal, setViewModal] = useState(false);

    //manage edit form modal
    function handleModalShow() {
        setEdit(true);
    }
    function handleModalClose() {
        setEdit(false);
    }

    //handle profile view modal
    function profileModalShow() {
        setViewModal(true);
    }
    function profileModalClose() {
        setViewModal(false);
    }

    return (
        <>
            {viewModal && (
                <StudentProfile
                    onCloseModal={profileModalClose}
                    studentData={student}
                />
            )}
            {edit && (
                <StudentAddModal
                    onCloseModal={handleModalClose}
                    studentData={student}
                />
            )}

            <tr className='text-center hover:bg-violet-900/80 duration-150 odd:bg-gray-400/80 h-[80px] align-middle border-t border-gray-500 *:border-r *:border-gray-500 bg-gray-600'>
                <td>1</td>
                <td className='flex h-[80px]  justify-center items-center'>
                    <img
                        className='size-[60px] '
                        src={student.image}
                        alt='avater'
                    />
                </td>
                <td>{student.name}</td>
                <td>{student.email}</td>
                <td>{student.cell}</td>
                <td className='*:px-4 *:py-1 *:rounded max-w-28'>
                    <button
                        onClick={profileModalShow}
                        title='view'
                        className='bg-green-600/80 hover:bg-green-700 duration-150 m-1'>
                        <FaEye className='text-white' />
                    </button>
                    <button
                        onClick={handleModalShow}
                        title='edit'
                        className='bg-yellow-600/80 hover:bg-yellow-700 m-1'>
                        <CiEdit className='text-white' />
                    </button>
                    <button
                        onClick={() => {
                            dispatch(deleteSingleStudent(student.id));
                        }}
                        title='delete'
                        className='bg-orange-600/80 hover:bg-orange-700 duration-150 m-1'>
                        <MdDelete className='text-white' />
                    </button>
                </td>
            </tr>
        </>
    );
}

