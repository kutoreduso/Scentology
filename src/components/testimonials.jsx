import React from 'react';

// 1. Define your data array here
const testimonialsData = [
    {
        id: 1,
        quote: "Finding my signature scent has never been easier. The packaging was immaculate, and the fragrance lasts all day. Truly a luxurious experience from start to finish.",
        author: "Eleanor V.",
        status: "Verified Buyer"
    },
    {
        id: 2,
        quote: "I ordered a blind buy based on the scent profile descriptions, and it exceeded my expectations. The delivery was remarkably fast, and the complementary samples were a lovely touch.",
        author: "Marcus T.",
        status: "Verified Buyer"
    },
    {
        id: 3,
        quote: "An incredible curation of olfactory houses. The customer service team helped me pick out the perfect anniversary gift for my husband. We will definitely be shopping here again.",
        author: "Sophia R.",
        status: "Verified Buyer"
    }
];

const TestimonialSection = () => {
    return (
        <div className="container mx-auto py-20 px-6 font-satoshi">
            
            {/* Section Header */}
            <div className="text-center max-w-2xl mx-auto mb-16">
                <h2 className="text-3xl lg:text-4xl font-light tracking-widest text-gray-900 uppercase mb-4">
                    Words from our clients
                </h2>
                <div className="w-12 h-[1px] bg-gray-900 mx-auto"></div>
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                
                {/* 2. Map through the data array */}
                {testimonialsData.map((testimonial) => (
                    <div 
                        key={testimonial.id} 
                        className="flex flex-col items-center text-center p-8 bg-[#f9f9f9] rounded-sm"
                    >
                        {/* 5 Stars */}
                        <div className="flex gap-1 mb-6 text-[#19183B] text-lg">
                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                        </div>
                        
                        {/* Quote */}
                        <p className="text-gray-600 italic leading-relaxed mb-8 flex-grow">
                            "{testimonial.quote}"
                        </p>
                        
                        {/* Author */}
                        <div>
                            <p className="text-sm font-bold text-gray-900 tracking-wider uppercase">
                                {testimonial.author}
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                                {testimonial.status}
                            </p>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default TestimonialSection;