import React from 'react';
import CreateBrandModal from './CreateBrandModal';

const ManageBrands = () => {
    return (
        <div>
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold">Manage Brand</h1>
          <CreateBrandModal/>
        </div>
      </div>
    );
};

export default ManageBrands;