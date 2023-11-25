import { useState } from "react";
import Link from "next/link";

type PropsForm = {
  title: string;
  openStates: boolean
  setOpenStates: (value: boolean) => void
};

export function State({openStates, setOpenStates }: PropsForm) {

  function toggleForm() {
    setOpenStates(!openStates);
  }

  function closeForm() {
    setOpenStates(false);
  }

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">

      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <div className="mt-2">
                  <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Estado</label>
                      <div className="mt-1">
                        <select id="country" name="country" autoComplete="country" className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md text-gray-900">
                          <option>En proceso</option>
                          <option>Finalizado</option>
                          <option>Cancelado</option>
                        </select>
                      </div>
                    </div>
                    
                    
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto" onClick={closeForm}>
                Cancel
              </button>
              <button type="button" className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Modificar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}