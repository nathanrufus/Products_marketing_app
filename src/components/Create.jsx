import React from 'react'

function Create() {
    return (
        <div class="flex items-center justify-center p-12">
            <div class="mx-auto w-full max-w-[550px] bg-white">
                <form
                    class="py-6 px-9"
                    action="https://formbold.com/s/FORM_ID"
                    method="POST"
                >
                    <div class="mb-6 pt-4">
                        <label class="mb-5 block text-xl font-semibold text-[#07074D]">
                            Create Post
                        </label>
                        <div class="mb-8">

                            <label class="block mb-2 text-sm font-medium text-gray-900 dark:text-white" for="file_input">Upload photo</label>
                            <input class="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
                            <p class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <label for="name" className="block mb-2 font-medium text-gray-900 dark:text-white text-xl">name</label>
                            <input type="text" id="small-input" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div class="mb-6">
                            <label for="description" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">description</label>
                            <input type="text" id="large-input" class="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-base focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                    </div>
                    <div>
                        <button type='submit'
                            class="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                        >
                            Send File
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Create