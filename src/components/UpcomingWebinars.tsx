"use client";

function BookAppointmentForm() {
  return (
    <div className="h-[40rem] w-full bg-white flex items-center justify-center px-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl text-black font-bold text-center mb-6">Appointment Form</h2>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-black">
              Name
            </label>
            <input
              type="text"
              placeholder="Name"
              className="w-full border text-black border-gray-300 rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black">
              Mobile Number
            </label>
            <input
              type="text"
              placeholder="Mobile Number"
              className="w-full border text-black border-gray-300 rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              className="w-full border text-black border-gray-300 rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-black">
              Preferred Slot
            </label>
            <select className="w-full border text-black border-gray-300 rounded-lg p-2">
              <option value="Morning">Morning</option>
              <option value="Afternoon">Afternoon</option>
              <option value="Evening">Evening</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-black font-medium">
              Preferred Date
            </label>
            <input
              type="date"
              className="w-full border text-black border-gray-300 rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-sm text-black font-medium">
              Preferred Time
            </label>
            <input
              type="time"
              className="w-full border border-gray-300 rounded-lg p-2"
            />
          </div>
          <div>
            <label className="block text-sm text-black font-medium">
              Mode of Consultation
            </label>
            <select className="w-full border text-black border-gray-300 text-blackrounded-lg p-2">
              <option value="Offline">Offline</option>
              <option value="Online">Online</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-black font-medium">
              Address
            </label>
            <input
              type="text"
              placeholder="Address"
              className="w-full border text-black border-gray-300 rounded-lg p-2"
            />
          </div>
          <div className="sm:col-span-2 flex justify-center">
            <button
              type="submit"
              className="w-full p-3 bg-orange-500 hover:bg-orange-600 text-white hover:text-green-300 font-semibold rounded-lg transition duration-300 ease-in-out"
            >
              Book an Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BookAppointmentForm;
