import React from 'react';
import { View, Text, Image } from 'react-native';
import { Ride } from '../types/type';
import { icons } from '@/constants';
import { formatDate, formatTime } from "../lib/utils";

export const RideCard = ({
  ride: {
    destination_longitude,
    destination_latitude,
    origin_longitude,
    destination_address,
    created_at,
    ride_time,
    driver,
    payment_status,
    origin_address,
  },
}: {
  ride: Ride;
}) => (
  <View className="flex flex-row items-start bg-white rounded-lg shadow-sm shadow-neutral-300 mb-3 p-3">
     
    {/* Map Section */}
    <Image
      source={{
        uri: `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:${destination_longitude},${destination_latitude}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_API_KEY}`,
      }}
      className="w-[100px] h-[100px] rounded-lg"
    />

    {/* Ride Details Section */}
    <View className="flex-1 ml-4">
      {/* Origin Address */}
      <View className="flex flex-row items-center mb-2">
        <Image source={icons.to} className="w-5 h-5 mr-2" />
        <Text className="text-md font-JakartaMedium" numberOfLines={1}>
          {origin_address}
        </Text>
      </View>

      {/* Destination Address */}
      <View className="flex flex-row items-center mb-2">
        <Image source={icons.point} className="w-5 h-5 mr-2" />
        <Text className="text-md font-JakartaMedium" numberOfLines={1}>
          {destination_address}
        </Text>
      </View>
      <View className="flex flex-col w-full mt-5 bg-general-500 rounded-lg p-3 items-start justify-center">
          <View className="flex flex-row items-center w-full justify-between mb-5">
            <Text className="text-md font-JakartaMedium text-gray-500">
              Date & Time
            </Text>
            <Text className="text-md font-JakartaBold" numberOfLines={1}>
              {formatDate(created_at)}, {formatTime(ride_time)}
            </Text>
        </View>      

      {/* Driver Name */}
      <View className="flex flex-row items-center w-full justify-between mb-5">
            <Text className="text-md font-JakartaMedium text-gray-500">
              Driver
            </Text>
            <Text className="text-md font-JakartaBold">
              {driver.first_name} {driver.last_name}
            </Text>
          </View>
    </View>
    <View className="flex flex-row items-center w-full justify-between mb-5">
            <Text className="text-md font-JakartaMedium text-gray-500">
              Car Seats
            </Text>
            <Text className="text-md font-JakartaBold">
              {driver.car_seats}
            </Text>
          </View>

          <View className="flex flex-row items-center w-full justify-between mb-5">
            <Text className="text-md font-JakartaMedium text-gray-500">
              Payment Status
            </Text>
            <Text className={`text-md capitalize font-JakartaBold ${payment_status === "paid" ? "text-green-500" : "text-red-500"}`}>
              {payment_status}
            </Text>
          </View>



  </View>
</View>

);