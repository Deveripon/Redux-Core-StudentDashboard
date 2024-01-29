import { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { useDispatch } from "react-redux";
import avater from "../assets/img/3523407.png";
import { addNewStudent, updateStudent } from "../redux/actions";
export default function StudentAddModal({ onCloseModal, studentData }) {
    const dispatch = useDispatch();

    //setup initial form data
    const initialValue = studentData
        ? studentData
        : {
              name: "",
              email: "",
              cell: "",
              image: "",
          };
    const [inputs, setInputs] = useState(initialValue);

    //handle input changes
    function handleInputFieldChange(e) {
        const inputField = e.target.name;
        const value = e.target.value;
        setInputs((initial) => ({
            ...initial,
            [inputField]: value,
        }));
    }

    //handle from submission
    async function handleFormSubmit(e) {
        e.preventDefault();

        //Check the submisson mode Update / Post ?
        if (!studentData) {
            dispatch(addNewStudent(inputs));
        } else {
            //trigger only when from will submit on edit mode
            if (studentData === inputs) {
                alert("No changes were made");
                return false;
            } else {
                dispatch(updateStudent(studentData.id, inputs));
            }
        }

        onCloseModal();
    }

    return (
        <>
            <section className='student-add-modal flex flex-col justify-center items-center absolute top-0 left-0 h-screen w-full bg-gray-700/95 z-50'>
                <div className='wrapper border border-gray-500 p-12 rounded '>
                    <h2 className='text-teal-600 mb-10 font-bold text-3xl'>
                        Add New Student
                    </h2>
                    <form
                        onSubmit={handleFormSubmit}
                        className='flex flex-col gap-2'>
                        <div className='inner flex gap-2 my-6'>
                            <div className='input-group text-gray-300  flex flex-col '>
                                <label
                                    className='font-semibold text-md'
                                    htmlFor='name'>
                                    Name
                                </label>
                                <input
                                    className='p-2 bg-transparent border-white/20 border rounded text-gray-200  outline-none'
                                    autoComplete='true'
                                    type='text'
                                    name='name'
                                    id='name'
                                    value={inputs.name}
                                    onChange={handleInputFieldChange}
                                />
                            </div>

                            <div className='input-group text-gray-300 flex flex-col '>
                                <label
                                    className='font-semibold text-md'
                                    htmlFor='email'>
                                    Email
                                </label>
                                <input
                                    className='p-2 rounded bg-transparent border-white/20 border text-gray-200  outline-none'
                                    autoComplete='true'
                                    type='text'
                                    name='email'
                                    id='email'
                                    value={inputs.email}
                                    onChange={handleInputFieldChange}
                                />
                            </div>
                        </div>

                        <div className='iner flex gap-2'>
                            <div className='input-group text-gray-300 flex flex-col '>
                                <label
                                    className='font-semibold text-md'
                                    htmlFor='cell'>
                                    Cell
                                </label>
                                <input
                                    className='p-2 rounded bg-transparent border-white/20 border text-gray-200  outline-none'
                                    autoComplete='true'
                                    type='text'
                                    name='cell'
                                    id='cell'
                                    value={inputs.cell}
                                    onChange={handleInputFieldChange}
                                />
                            </div>
                            <div className='input-group text-gray-300  flex flex-col '>
                                <label
                                    className='font-semibold text-md'
                                    htmlFor='image'>
                                    image
                                </label>
                                <input
                                    className='p-2 rounded bg-transparent border-white/20 border text-gray-200 outline-none'
                                    autoComplete='true'
                                    type='text'
                                    name='image'
                                    id='image'
                                    value={inputs.image}
                                    onChange={handleInputFieldChange}
                                />
                            </div>
                        </div>
                        <div className='file border rounded bg-transparent border-gray-600 text-gray-300 mt-5 py-1'>
                            <input
                                className='file:bg-transparent file:text-gray-300  file:border-green-500 file:rounded-full'
                                type='file'
                                name='photo'
                                id='photo'
                            />
                            <div className='preview my-5 p-2'>
                                <div className='item border-gray-600 border w-fit rounded'>
                                    <TiDeleteOutline className='text-gray-400 text-2xl hover:text-red-500 duration-200' />
                                    <img
                                        className='size-[120px]'
                                        src={avater}
                                        alt='avater'
                                    />
                                </div>
                            </div>
                        </div>

                        <div className='button-group flex justify-between mt-10'>
                            <button className='px-5 py-2 bg-green-600 rounded'>
                                Add Student
                            </button>
                            <button
                                onClick={onCloseModal}
                                className='px-5 py-2 bg-orange-600 rounded'>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

