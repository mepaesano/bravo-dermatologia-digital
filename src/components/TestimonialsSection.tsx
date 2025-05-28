import React from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "María L.",
      text: "Después de años lidiando con el acné, la Dra. Bravo me ayudó a recuperar la confianza en mi piel. ¡Gracias!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 2,
      name: "Carlos M.",
      text: "Excelente atención y profesionalismo. Los resultados del tratamiento superaron mis expectativas.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 3,
      name: "Lucía R.",
      text: "Recomiendo a la Dra. Bravo por su dedicación y calidez humana. Me sentí en buenas manos desde el primer momento.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 4,
      name: "Diego P.",
      text: "La Dra. Daniela tiene un enfoque muy profesional y detallado. Los tratamientos que me recomendó para mi rosácea fueron muy efectivos.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
    },
    {
      id: 5,
      name: "Alejandra M.",
      text: "Increíble como mejoró la calidad de mi piel con los tratamientos recomendados. El consultorio es muy acogedor y el trato es excelente.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=100&q=80"
    },
  ];

  return (
    <section id="testimonios" className="py-24 bg-gradient-to-br from-gris-paloma to-blanco-nieve">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Testimonios</h2>
          <div className="h-1 w-20 bg-pink-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-600">
            La satisfacción de nuestros pacientes es nuestra mejor carta de presentación.
            Conoce algunas de sus experiencias.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-blanco-nieve p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-rosa-pastel"
                />
                <div>
                  <h3 className="font-bold text-gray-800">{testimonial.name}</h3>
                  <div className="flex items-center">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <blockquote className="italic text-gray-600 relative">
                <svg className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4 w-8 h-8 text-rosa-pastel opacity-50" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M10 8c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zM28 8c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path>
                </svg>
                {testimonial.text}
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
