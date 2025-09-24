"use client";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

interface BeforeAfterProps {
  beforeImage: string;
  afterImage: string;
}

export default function BeforeAfter({ beforeImage, afterImage }: BeforeAfterProps) {
  return (
    <section className="py-20 bg-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">The MAS Group Transformation</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-4">Slide to see the dramatic impact of our craftsmanship and design expertise.</p>
        </div>
        <div className="aspect-[16/9] max-w-5xl mx-auto">
            <ReactCompareSlider
                itemOne={<ReactCompareSliderImage src={beforeImage} alt="Before" />}
                itemTwo={<ReactCompareSliderImage src={afterImage} alt="After" />}
            />
        </div>
      </div>
    </section>
  );
}