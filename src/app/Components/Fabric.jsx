// components/CustomDesignTool.js
"use client"; // Required for client-side interactivity in Next.js 13+
import React, { useState, useRef, useEffect } from "react";

const CustomDesignTool = () => {
  const canvasRef = useRef(null); // Reference to the canvas element
  const [tshirtColor, setTshirtColor] = useState("white"); // Default T-shirt color
  const [text, setText] = useState("");
  const [canvas, setCanvas] = useState(null); // Fabric.js canvas instance
  const [fabricLoaded, setFabricLoaded] = useState(false); // Track if fabric is loaded

  // Dynamically import fabric and initialize the canvas
  useEffect(() => {
    import("fabric").then((fabricModule) => {
      const fabric = fabricModule.default; // Access the default export
      if (canvasRef.current) {
        const fabricCanvas = new fabric.Canvas(canvasRef.current, {
          backgroundColor: tshirtColor, // Set initial background color
        });
        setCanvas(fabricCanvas);
        setFabricLoaded(true); // Mark fabric as loaded
      }
    });
  }, []);

  // Update T-shirt color
  useEffect(() => {
    if (canvas && fabricLoaded) {
      canvas.setBackgroundColor(tshirtColor, () => {
        canvas.renderAll(); // Re-render the canvas with the new color
      });
    }
  }, [tshirtColor, canvas, fabricLoaded]);

  // Handle adding text to the T-shirt
  const handleAddText = () => {
    if (canvas && text && fabricLoaded) {
      const fabricText = new fabric.Text(text, {
        left: 100, // Position of the text
        top: 100,
        fontSize: 30,
        fontFamily: "Arial",
        fill: tshirtColor === "white" ? "black" : "white", // Text color based on T-shirt color
      });
      canvas.add(fabricText);
      setText(""); // Clear the input field
    }
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file && canvas && fabricLoaded) {
      const reader = new FileReader();
      reader.onload = (event) => {
        fabric.Image.fromURL(event.target.result, (img) => {
          img.scale(0.5); // Resize image if needed
          canvas.add(img);
        });
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle saving the design as an image
  const handleSaveDesign = () => {
    if (canvas && fabricLoaded) {
      const dataURL = canvas.toDataURL({
        format: "png",
        quality: 1,
      });
      const link = document.createElement("a");
      link.href = dataURL;
      link.download = "tshirt-design.png";
      link.click();
    }
  };

  return (
    <div className="p-8 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Design Your T-Shirt</h2>

      {/* T-Shirt Color Selector */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">T-Shirt Color:</label>
        <div className="flex gap-4">
          <button
            onClick={() => setTshirtColor("white")}
            className={`px-4 py-2 rounded ${
              tshirtColor === "white" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            White
          </button>
          <button
            onClick={() => setTshirtColor("black")}
            className={`px-4 py-2 rounded ${
              tshirtColor === "black" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Black
          </button>
        </div>
      </div>

      {/* Add Text */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Add Text:</label>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="Enter text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="p-2 border rounded flex-grow"
          />
          <button
            onClick={handleAddText}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add Text
          </button>
        </div>
      </div>

      {/* Upload Image */}
      <div className="mb-4">
        <label className="block text-sm font-medium mb-2">Upload Image:</label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="p-2 border rounded"
        />
      </div>

      {/* Canvas for T-Shirt Design */}
      <div className="mb-4">
        <canvas
          ref={canvasRef}
          width={500} // Set canvas width
          height={500} // Set canvas height
          className="border rounded"
        />
      </div>

      {/* Save Design Button */}
      <button
        onClick={handleSaveDesign}
        className="bg-green-500 text-white px-4 py-2 rounded"
      >
        Save Design
      </button>
    </div>
  );
};

export default CustomDesignTool;