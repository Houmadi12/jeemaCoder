import Button from "./Button"
//box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
function FormAdd() {
  return (
    <div className="">
      <form className="flex flex-col w-fll p-4 shadow-[0_5px_8px_rgba(0,0,0,0.35)] rounded justify-center items-center gap-4">
        <div className="flex justify-between  gap-10">
          <div className="w-2/4">
            <label htmlFor="tache" className="block text-xs md:text-md lg:text-[15px] font-medium font-lexendDeca leading-6 text-[#555555]">Prenom</label>
            <div className="mt-2">
              <input id="tache" type="text" required className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm md:text-xl sm:leading-6" />
            </div>
          </div>
          <div className="w-2/4">
            <label htmlFor="description" className="block text-xs md:text-md lg:text-[15px] font-medium font-lexendDeca leading-6 text-[#000000]">Nom</label>
            <div className="mt-2">
              <input id="description" type="text" required className="block w-full rounded-md  px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm md:text-xl sm:leading-6" />
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-10">
          <div className="w-2/4">
            <label htmlFor="email" className="block text-xs md:text-md lg:text-[15px] font-medium font-lexendDeca leading-6 text-[#000000]">Email</label>
            <div className="mt-2">
              <input id="email" type="Email" required className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm md:text-xl sm:leading-6" />
            </div>
          </div>
          <div className="w-2/4">
            <label htmlFor="description" className="block text-xs md:text-md lg:text-[15px] font-medium font-lexendDeca leading-6 text-[#000000]">Télephone</label>
            <div className="mt-2">
              <input id="description" type="text" required className="block w-full rounded-md  px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm md:text-xl sm:leading-6" />
            </div>
          </div>
        </div>
        <div className="w-full">
          <Button titre="Ajouter" param="py-1 w-full text-lg font-semibold text-white shadow-sm hover:bg-[#198750] bg-[#198754] rounded-sm" />
        </div>
      </form>
    </div>

  )
}

export default FormAdd
