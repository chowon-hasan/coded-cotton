 const ProductSkeleton = () => {
    return (
      <div className="max-w-7xl mx-auto my-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="w-2/3 ms-auto">
            <div className="animate-pulse bg-gray-200 h-96 w-full"></div>
          </div>
          <div>
            <div className="animate-pulse bg-gray-200 h-8 w-3/4 mb-4"></div>
            <div className="animate-pulse bg-gray-200 h-4 w-full mb-2"></div>
            <div className="animate-pulse bg-gray-200 h-4 w-2/3 mb-2"></div>
            <div className="animate-pulse bg-gray-200 h-4 w-1/2 mb-4"></div>
            <div className="animate-pulse bg-gray-200 h-6 w-1/4 mb-4"></div>
            <div className="animate-pulse bg-gray-200 h-4 w-1/3 mb-2"></div>
            <div className="animate-pulse bg-gray-200 h-4 w-1/2 mb-4"></div>
            <div className="animate-pulse bg-gray-200 h-4 w-1/3 mb-2"></div>
            <div className="animate-pulse bg-gray-200 h-4 w-1/2 mb-4"></div>
          </div>
        </div>
      </div>
    );
  };


  export default ProductSkeleton;