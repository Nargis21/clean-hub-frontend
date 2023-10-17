'use client'
import React, { useState } from 'react';
import Services from './Services';
import { Button } from 'antd';
import { ReloadOutlined } from '@ant-design/icons'
import PaginationControls from "./PaginationControls"

const FilteredServices = ({ services, searchParams }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedPricing, setSelectedPricing] = useState("");
    const [selectedAvailabilityInfo, setSelectedAvailabilityInfo] = useState("");

    // Search services by title or author
    const searchedServices = services?.filter((service) => {
        const titleMatch = service.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        const locationMatch = service.location
            .toLowerCase()
            .includes(searchTerm.toLowerCase());
        return titleMatch || locationMatch
    });

    // Extract pricing pricing from the service data
    const pricing = [
        ...new Set(services?.map((service) => service.pricing)),
    ];
    // Extract unique availability  from the service data
    const availabilityInfo = [
        ...new Set(services?.map((service) => service.availabilityInfo)),
    ];


    // Filter services by pricing
    const handlePricingChange = (e) => {
        setSelectedPricing(e.target.value);
    };

    // Filter services by publication year
    const handleAvailabilityInfoChange = (e) => {
        setSelectedAvailabilityInfo(e.target.value);
    };

    const filteredServicesByPricingAndAvailabilityInfo = searchedServices?.filter(
        (service) => {
            const pricingMatch =
                !selectedPricing ||
                service.pricing.toLowerCase() === selectedPricing.toLowerCase();
            const availabilityInfoMatch =
                !selectedAvailabilityInfo ||
                service.availabilityInfo.toLowerCase() === selectedAvailabilityInfo.toLowerCase();
            return pricingMatch && availabilityInfoMatch;
        }
    );

    // Reset filters
    const resetFilters = () => {
        setSearchTerm("");
        setSelectedPricing("");
        setSelectedAvailabilityInfo("");
    };

    const page = searchParams['page'] ?? '1'
    const per_page = searchParams['per_page'] ?? '6'

    // mocked, skipped and limited in the real app
    const start = (Number(page) - 1) * Number(per_page) // 0, 5, 10 ...
    const end = start + Number(per_page) // 5, 10, 15 ...

    const entries = filteredServicesByPricingAndAvailabilityInfo.slice(start, end)

    return (
        <div>
            <div className="grid lg:grid-cols-10 grid-cols-1 gap-4 lg:p-12 p-4 bg-blue-950">
                <div className="col-span-6">
                    <input
                        type="text"
                        placeholder="Search by Title or Location"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="px-4 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 w-full"
                    />
                </div>

                <div className="flex lg:gap-4 gap-2 col-span-4">
                    <select
                        value={selectedPricing}
                        onChange={handlePricingChange}
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 "
                    >
                        <option value="">All Pricing</option>
                        {(pricing).map((price, i) => (
                            <option key={i} value={price}>
                                {price}
                            </option>
                        ))}
                    </select>

                    <select
                        value={selectedAvailabilityInfo}
                        onChange={handleAvailabilityInfoChange}
                        className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="">All Availability</option>
                        {(availabilityInfo).map((availability, i) => (
                            <option key={i} value={availability}>
                                {availability}
                            </option>
                        ))}
                    </select>

                    <Button
                        onClick={resetFilters}
                        type="primary"
                        style={{ marginTop: '5px' }}
                        size='large'
                    >
                        <ReloadOutlined />
                    </Button>
                </div>
            </div>
            <Services services={entries}></Services>
            <PaginationControls
                hasNextPage={end < filteredServicesByPricingAndAvailabilityInfo.length}
                hasPrevPage={start > 0}
                totalData={filteredServicesByPricingAndAvailabilityInfo.length}
            ></PaginationControls>
        </div>
    );
};

export default FilteredServices;