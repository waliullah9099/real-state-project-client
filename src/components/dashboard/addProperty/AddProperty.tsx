import Modal from "@/components/ui/Modal"

const AddProperty = ({isModalOpen, setModalOpen, handleAddProperty} : any ) => {
    
    return (
        <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Add New Property"
      >
        <form onSubmit={handleAddProperty} className="space-y-4">
          <input
            type="text"
            placeholder="Property Name"
            className="w-full px-3 py-2 border rounded"
          />
          <input
            type="text"
            placeholder="Location"
            className="w-full px-3 py-2 border rounded"
          />
          <button
            type="submit"
            className="px-4 py-2 text-white bg-green-600 rounded"
          >
            Save
          </button>
        </form>
      </Modal>
    )
}

export default AddProperty