import Form from "@/components/form/Form";
import Input from "@/components/form/Input";
import Modal from "@/components/ui/Modal";
import { useCreatePropertiesMutation } from "@/redux/api/propertyApi/propertyApi";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const AddProperty = ({ isModalOpen, setModalOpen }: any) => {
  const [createProperties, {data, isLoading}] = useCreatePropertiesMutation();
  const router = useRouter();

  const handleAddProperty = async (data: any) => {
    const newData = {
      ...data,
      bedrooms: Number(data?.bedrooms),
      price: Number(data?.price),
      bathrooms: Number(data?.bathrooms),
      squareFoot: Number(data?.squareFoot),
    };

    try {
      const res = await createProperties(newData);
      if (res?.data?.title) {
        toast.success("Property created successfully!");
        setModalOpen(false);
        // router.push("/dash")
      }
    } catch (error: any) {
      console.error(error?.message);
    }
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={() => setModalOpen(false)}
      title="Add New Property"
    >
      <Form onSubmit={handleAddProperty}>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-4">
          <Input name="title" label="Property Name" />
          <Input name="thumbNailImage" label="Thumbnail Image" />
          <Input name="price" label="Price" />
          <Input name="type" label="Property Type" />
          <Input name="propertyFor" label="Property For" />
          <Input name="bedrooms" label="Bed Rooms" />
          <Input name="bathrooms" label="Bath Rooms" />
          <Input name="city" label="City" />
          <Input name="country" label="Country" />
          <Input name="propertyAddress" label="Property Address" />
          <Input name="squareFoot" label="Square Foot" />
          <Input name="buildYear" label="Build Year" />
          <Input name="description" label="Description" />
        </div>
        <div className=" text-right">
          <button
            type="submit"
            className="px-4 py-2 text-white bg-[#1563DF] rounded"
          >
            Save
          </button>
        </div>
      </Form>
    </Modal>
  );
};

export default AddProperty;
