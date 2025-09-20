import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [senderRegion, setSenderRegion] = useState("");
  const [receiverRegion, setReceiverRegion] = useState("");

  const parcelType = watch("type");

  const onSubmit = (data) => {
    let baseCost = data.type === "document" ? 50 : 100;
    let weightCost =
      data.type === "non-document" && data.weight
        ? parseInt(data.weight) * 10
        : 0;
    let totalCost = baseCost + weightCost;

    toast.success(`Delivery cost: ৳${totalCost}. Confirm to proceed.`);

    const parcelData = {
      ...data,
      cost: totalCost,
      creation_date: new Date().toISOString(),
    };

    console.log("Parcel saved:", parcelData);
  };

  const serviceCenters = useLoaderData();

  // Get districts by region
  const getDistricts = (region) =>
    serviceCenters.filter((w) => w.region === region);

  // Extract unique regions
  const regions = [...new Set(serviceCenters.map((w) => w.region))];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Toaster />
      <h1 className="text-3xl font-bold mb-2">Add Parcel (User)</h1>
      <p className="text-gray-600 mb-6">
        Please fill the form to send your parcel. All fields are required except
        weight.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Parcel Info */}
        <div className="p-4  shadow-2xl rounded-2xl">
          <h2 className="text-xl font-semibold mb-4">Parcel Info</h2>

          {/* Type */}
          <label className="block font-medium mb-2">Parcel Type</label>
          <div className="flex gap-6 mb-4">
            <label className="label cursor-pointer">
              <input
                type="radio"
                value="document"
                {...register("type", { required: true })}
                className="radio radio-primary"
              />
              <span className="label-text ml-2">Document</span>
            </label>
            <label className="label cursor-pointer">
              <input
                type="radio"
                value="non-document"
                {...register("type", { required: true })}
                className="radio radio-primary"
              />
              <span className="label-text ml-2">Non-Document</span>
            </label>
          </div>
          {errors.type && <p className="text-red-500">Type is required</p>}

          {/* Title & Weight in same row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-medium mb-2">Parcel Name</label>
              <input
                type="text"
                placeholder="Parcel Name"
                {...register("title", { required: true })}
                className="input input-bordered w-full"
              />
              {errors.title && (
                <p className="text-red-500">Title is required</p>
              )}
            </div>
            {parcelType === "non-document" && (
              <div>
                <label className="block font-medium mb-2">Weight (kg)</label>
                <input
                  type="number"
                  placeholder="Weight"
                  {...register("weight")}
                  className="input input-bordered w-full"
                />
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-2 ">
          {/* Sender Info */}
          <div className="shadow-2xl p-4 rounded-2xl">
            <h2 className="text-xl font-semibold mb-4">Sender Info</h2>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="font-medium mb-2 block">Sender Name</label>
                <input
                  type="text"
                  {...register("senderName", { required: true })}
                  className="input input-bordered w-full mb-4"
                  defaultValue=""
                />
              </div>
              <div className="flex-1">
                <label className="font-medium mb-2 block">
                  Sender Pickup Warehouse
                </label>
                <select
                  {...register("senderServiceCenter", { required: true })}
                  className="select select-bordered w-full mb-4"
                  disabled={!senderRegion}
                >
                  <option value="">Select Service Center</option>
                  {getDistricts(senderRegion).map((d, idx) => (
                    <option key={idx} value={d.district}>
                      {d.district}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block font-medium mb-2">Sender Contact</label>
                <input
                  type="text"
                  {...register("senderContact", { required: true })}
                  className="input input-bordered w-full mb-4"
                />
              </div>
              <div className="flex-1">
                <label className="block font-medium mb-2">Sender Address</label>
                <input
                  type="text"
                  {...register("senderAddress", { required: true })}
                  className="input input-bordered w-full mb-4"
                />
              </div>
            </div>

            <label className="block font-medium mb-2">Sender Region</label>
            <select
              {...register("senderRegion", { required: true })}
              className="select select-bordered w-full mb-4"
              onChange={(e) => setSenderRegion(e.target.value)}
            >
              <option value="">Select Region</option>
              {regions.map((region, idx) => (
                <option key={idx} value={region}>
                  {region}
                </option>
              ))}
            </select>

            <label className="block font-medium mb-2">Pickup Instruction</label>
            <textarea
              {...register("pickupInstruction", { required: true })}
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>

          {/* Receiver Info */}
          <div className="shadow-2xl p-4 rounded-2xl">
            <h2 className="text-xl font-semibold mb-4">Receiver Info</h2>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block font-medium mb-2">Receiver Name</label>
                <input
                  type="text"
                  {...register("receiverName", { required: true })}
                  className="input input-bordered w-full mb-4"
                />
              </div>
              <div className="flex-1">
                <label className="block font-medium mb-2">
                  Receiver Delivery Wire house
                </label>
                <select
                  {...register("receiverServiceCenter", { required: true })}
                  className="select select-bordered w-full mb-4"
                  disabled={!receiverRegion}
                >
                  <option value="">Select Service Center</option>
                  {getDistricts(receiverRegion).map((d, idx) => (
                    <option key={idx} value={d.district}>
                      {d.district}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block font-medium mb-2">
                  Receiver Address
                </label>
                <input
                  type="text"
                  {...register("receiverAddress", { required: true })}
                  className="input input-bordered w-full mb-4"
                />
              </div>
              <div className="flex-1">
                <label className="block font-medium mb-2">
                  Receiver Contact
                </label>
                <input
                  type="text"
                  {...register("receiverContact", { required: true })}
                  className="input input-bordered w-full mb-4"
                />
              </div>
            </div>

            <label className="block font-medium mb-2">Receiver Region</label>
            <select
              {...register("receiverRegion", { required: true })}
              className="select select-bordered w-full mb-4"
              onChange={(e) => setReceiverRegion(e.target.value)}
            >
              <option value="">Select Region</option>
              {regions.map((region, idx) => (
                <option key={idx} value={region}>
                  {region}
                </option>
              ))}
            </select>

            <label className="block font-medium mb-2">
              Delivery Instruction
            </label>
            <textarea
              {...register("deliveryInstruction", { required: true })}
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>
        </div>

        <button type="submit" className="btn btn-primary text-black w-full">
          Proceed to Confirm Booking
        </button>
      </form>
    </div>
  );
};

export default SendParcel;
