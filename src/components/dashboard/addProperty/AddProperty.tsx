import { toast } from "sonner";
import Modal from "@/components/ui/Modal";
import Form from "@/components/form/Form";
import Input from "@/components/form/Input";
import { useRouter } from "next/navigation";
import {
  useCreatePropertiesMutation,
  useUpdatePropertyMutation,
} from "@/redux/api/propertyApi/propertyApi";

const AddProperty = ({
  isModalOpen,
  setModalOpen,
  initialData = null,
  editMode = false,
}: {
  isModalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  initialData?: any;
  editMode?: boolean;
}) => {
  const [createProperties] = useCreatePropertiesMutation();
  const [updateProperty] = useUpdatePropertyMutation();
  const router = useRouter();

  const handleAddOrUpdate = async (data: any) => {
    const newData = {
      ...data,
      bedrooms: Number(data?.bedrooms),
      price: Number(data?.price),
      bathrooms: Number(data?.bathrooms),
      squareFoot: Number(data?.squareFoot),
    };

    try {
      let res;
      if (editMode && initialData?._id) {
        res = await updateProperty({ id: initialData?._id, data: newData });
        console.log(res);

        if (res?.data?.title) {
          toast.success("Property updated successfully!");
        }
      } else {
        res = await createProperties(newData);
        if (res?.data?.title) {
          toast.success("Property created successfully!");
        }
      }
      setModalOpen(false);
    } catch (error: any) {
      console.error(error?.message);
    }
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={() => setModalOpen(false)}
      title={editMode ? "Update Property" : "Add New Property"}
    >
      <Form onSubmit={handleAddOrUpdate} defaultValues={initialData}>
        <div className="w-full md:w-[900px] grid grid-cols-1 md:grid-cols-2 gap-x-4 rounded-md">
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
        <div className="text-right">
          <button
            type="submit"
            className="px-4 py-2 text-white bg-[#1563DF] rounded"
          >
            {editMode ? "Update" : "Save"}
          </button>
        </div>
      </Form>
    </Modal>
  );
};

export default AddProperty;

// const AddProperty = ({ isModalOpen, setModalOpen }: any) => {
//   const [createProperties, {data, isLoading}] = useCreatePropertiesMutation();
//   const router = useRouter();

//   const handleAddProperty = async (data: any) => {
//     const newData = {
//       ...data,
//       bedrooms: Number(data?.bedrooms),
//       price: Number(data?.price),
//       bathrooms: Number(data?.bathrooms),
//       squareFoot: Number(data?.squareFoot),
//     };

//     try {
//       const res = await createProperties(newData);
//       if (res?.data?.title) {
//         toast.success("Property created successfully!");
//         setModalOpen(false);
//         // router.push("/dash")
//       }
//     } catch (error: any) {
//       console.error(error?.message);
//     }
//   };

//   return (
//     <Modal
//       isOpen={isModalOpen}
//       onClose={() => setModalOpen(false)}
//       title="Add New Property"
//     >
//       <Form onSubmit={handleAddProperty}>
//         <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-4">
//           <Input name="title" label="Property Name" />
//           <Input name="thumbNailImage" label="Thumbnail Image" />
//           <Input name="price" label="Price" />
//           <Input name="type" label="Property Type" />
//           <Input name="propertyFor" label="Property For" />
//           <Input name="bedrooms" label="Bed Rooms" />
//           <Input name="bathrooms" label="Bath Rooms" />
//           <Input name="city" label="City" />
//           <Input name="country" label="Country" />
//           <Input name="propertyAddress" label="Property Address" />
//           <Input name="squareFoot" label="Square Foot" />
//           <Input name="buildYear" label="Build Year" />
//           <Input name="description" label="Description" />
//         </div>
//         <div className=" text-right">
//           <button
//             type="submit"
//             className="px-4 py-2 text-white bg-[#1563DF] rounded"
//           >
//             Save
//           </button>
//         </div>
//       </Form>
//     </Modal>
//   );
// };

// export default AddProperty;
