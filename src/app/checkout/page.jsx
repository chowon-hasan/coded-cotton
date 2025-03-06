"use client";
import { useSearchParams } from 'next/navigation';
import { useState, Suspense } from 'react';

function CheckoutContent() {
  const searchParams = useSearchParams();
  const cartItemsStr = searchParams.get('items');
  const cartItems = cartItemsStr ? JSON.parse(decodeURIComponent(cartItemsStr)) : [];
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  });

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Combine cart items and user data
    const orderData = {
      items: cartItems,
      userDetails: formData,
      totalAmount: total,
      orderDate: new Date().toISOString()
    };

    console.log('Order Data:', orderData);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Order Summary */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {cartItems.map((item, index) => (
            <div key={index} className="flex gap-4 mb-4 pb-4 border-b">
              <img 
                src={item.image} 
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-semibold">{item.name}</h3>
                <div className="text-sm text-gray-600 mt-1">
                  <p>Size: {item.size}</p>
                  <div className="flex items-center gap-1">
                    <span>Color:</span>
                    <div 
                      className="w-4 h-4 rounded-full" 
                      style={{ backgroundColor: item.color.toLowerCase() }}
                    ></div>
                  </div>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <p className="text-blue-500 font-semibold mt-1">
                  ৳{item.price * item.quantity}
                </p>
              </div>
            </div>
          ))}
          <div className="text-right text-xl font-bold mt-4">
            Total: ৳{total}
          </div>
        </div>

        {/* Customer Information Form */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Customer Information</h2>
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border rounded-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Address *</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  rows="3"
                  className="w-full px-3 py-2 border rounded-md"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
              >
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CheckoutContent />
    </Suspense>
  );
}