import CommonForm from "../common/form";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Label } from "../ui/label";

const initialAddressFormData = {
  address: "",
  city: "",
  phone: "",
  pincode: "",

  notes: "",
};
function AddressCard({
  addressInfo,
  handleDeleteAddress,
  handleEditAddress,
  setCurrentSelectedAddress,
  selectedId,
}) {
  const [formData, setFormData] = useState(initialAddressFormData);
  return (
    <Card>
      <CardHeader>
        <CartTitle> Add New Address</CartTitle>
      </CardHeader>
      <CardContent classname="space-y-3">
        <CommonForm />
      </CardContent>
    </Card>
  );
}

export default AddressCard;
