
import React from 'react';

const AppointmentSection = () => {
  return (
    <section id="reserva" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 p-10 md:p-12 bg-white">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Reserva tu Turno</h2>
                <p className="text-gray-600 mb-8">
                  Agenda tu consulta de manera fácil y rápida a través de DrApp. 
                  Selecciona la fecha y horario que mejor se adapte a tu agenda.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">1</span>
                    </div>
                    <div className="text-gray-700">Selecciona el tipo de consulta</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">2</span>
                    </div>
                    <div className="text-gray-700">Elige la fecha y horario disponible</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">3</span>
                    </div>
                    <div className="text-gray-700">Completa tus datos personales</div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                      <span className="text-blue-600 font-bold">4</span>
                    </div>
                    <div className="text-gray-700">Recibe la confirmación en tu email</div>
                  </div>
                </div>

                <a
                  href="https://drapp.com.ar/dra.danielabravo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-block bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Reservar en DrApp
                </a>
              </div>

              <div className="md:w-1/2 p-10 text-white flex flex-col justify-center">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">Horarios de Atención</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Lunes a Viernes</span>
                      <span>09:00 - 18:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sábados</span>
                      <span>10:00 - 13:00</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Domingos</span>
                      <span>Cerrado</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-4">Obra Social</h3>
                  <p className="mb-4">
                    Trabajamos con todas las obras sociales y prepagas. 
                    Consulta por tu cobertura al momento de reservar tu turno.
                  </p>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="bg-white/20 rounded-md p-2 text-center text-sm">OSDE</div>
                    <div className="bg-white/20 rounded-md p-2 text-center text-sm">Swiss Medical</div>
                    <div className="bg-white/20 rounded-md p-2 text-center text-sm">Galeno</div>
                    <div className="bg-white/20 rounded-md p-2 text-center text-sm">Medifé</div>
                    <div className="bg-white/20 rounded-md p-2 text-center text-sm">PAMI</div>
                    <div className="bg-white/20 rounded-md p-2 text-center text-sm">Otras</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
