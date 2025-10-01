

export default function NewTestimonials({userName, imageURL, userReview, altText}) {
  return (
    <section className="bg-gray-100 py-12">
      <div className="grid grid-cols-1 gap-4 mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Testimonials</h2>
        <div className="grid grid-cols-1 gap-4 text-center ">
            <div className=" grig grid-cols-1 w-full md:w-1/3 text-center px-4 mb-8">
              <div className="bg-white rounded-lg text-center shadow-lg p-6">
                <img
                  src={imageURL}
                  alt={altText}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <h3 className="text-xl font-bold text-center mb-2">
                  {userName}
                </h3>
                <p className="text-gray-700 text-center">
                  {userReview}
                </p>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
}
