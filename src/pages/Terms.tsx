import { FileText, Shield, CreditCard, AlertCircle, Clock, Users } from 'lucide-react';

export function Terms() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-gray-900 dark:text-white mb-6">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300">
              Please read these terms carefully before booking your trip
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Booking & Payment */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-gray-900 dark:text-white mb-4">
                    Booking & Payment
                  </h2>
                  <div className="space-y-3 text-gray-600 dark:text-gray-400">
                    <p>
                      <strong className="text-gray-900 dark:text-white">Booking Confirmation:</strong> A booking is confirmed only upon receipt of a 25% advance payment and written confirmation from tripsiIndia.
                    </p>
                    <p>
                      <strong className="text-gray-900 dark:text-white">Payment Schedule:</strong> The remaining 75% of the tour cost must be paid at least 15 days before the tour departure date.
                    </p>
                    <p>
                      <strong className="text-gray-900 dark:text-white">Accepted Payment Methods:</strong> We accept bank transfers, credit cards, debit cards, and UPI payments. A 2% convenience fee applies to credit card transactions.
                    </p>
                    <p>
                      <strong className="text-gray-900 dark:text-white">Price Validity:</strong> All quoted prices are valid for 7 days from the date of quotation and are subject to availability.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Cancellation Policy */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                    <AlertCircle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-gray-900 dark:text-white mb-4">
                    Cancellation & Refund Policy
                  </h2>
                  <div className="space-y-4 text-gray-600 dark:text-gray-400">
                    <p className="text-gray-900 dark:text-white">Cancellation charges are as follows:</p>
                    <ul className="space-y-2 pl-5">
                      <li className="flex items-start space-x-2">
                        <span className="text-orange-600 dark:text-orange-400 mt-1">•</span>
                        <span><strong>45+ days before departure:</strong> 10% of total tour cost</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-orange-600 dark:text-orange-400 mt-1">•</span>
                        <span><strong>30-44 days before departure:</strong> 25% of total tour cost</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-orange-600 dark:text-orange-400 mt-1">•</span>
                        <span><strong>15-29 days before departure:</strong> 50% of total tour cost</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-orange-600 dark:text-orange-400 mt-1">•</span>
                        <span><strong>7-14 days before departure:</strong> 75% of total tour cost</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-orange-600 dark:text-orange-400 mt-1">•</span>
                        <span><strong>Less than 7 days before departure:</strong> 100% of total tour cost (No refund)</span>
                      </li>
                    </ul>
                    <p className="pt-2">
                      <strong className="text-gray-900 dark:text-white">Refund Processing:</strong> Refunds will be processed within 15-20 business days from the date of cancellation.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Travel Documents */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                    <FileText className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-gray-900 dark:text-white mb-4">
                    Travel Documents & Requirements
                  </h2>
                  <div className="space-y-3 text-gray-600 dark:text-gray-400">
                    <p>
                      <strong className="text-gray-900 dark:text-white">Valid ID Proof:</strong> All travelers must carry a valid government-issued photo ID (Aadhaar, PAN Card, Passport, Voter ID, or Driving License).
                    </p>
                    <p>
                      <strong className="text-gray-900 dark:text-white">Special Permits:</strong> For destinations requiring special permits (e.g., Ladakh, certain parts of Northeast India), travelers must provide necessary documents 20 days before departure.
                    </p>
                    <p>
                      <strong className="text-gray-900 dark:text-white">Medical Fitness:</strong> Travelers must ensure they are medically fit for the tour, especially for high-altitude destinations. Medical certificates may be required.
                    </p>
                    <p>
                      <strong className="text-gray-900 dark:text-white">Travel Insurance:</strong> We strongly recommend purchasing comprehensive travel insurance. For certain destinations like Ladakh, it is mandatory.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Responsibilities */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                    <Shield className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-gray-900 dark:text-white mb-4">
                    Traveler Responsibilities
                  </h2>
                  <div className="space-y-3 text-gray-600 dark:text-gray-400">
                    <p>
                      <strong className="text-gray-900 dark:text-white">Conduct:</strong> Travelers are expected to maintain decorum and respect local customs, traditions, and laws. Any inappropriate behavior may result in tour termination without refund.
                    </p>
                    <p>
                      <strong className="text-gray-900 dark:text-white">Punctuality:</strong> Please adhere to scheduled timings for all activities. Delays caused by travelers will not be compensated.
                    </p>
                    <p>
                      <strong className="text-gray-900 dark:text-white">Personal Belongings:</strong> tripsiIndia is not responsible for loss, theft, or damage to personal belongings during the tour.
                    </p>
                    <p>
                      <strong className="text-gray-900 dark:text-white">Health & Safety:</strong> Travelers must follow all safety instructions provided by guides and tour operators.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Company Responsibilities */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-gray-900 dark:text-white mb-4">
                    Our Responsibilities
                  </h2>
                  <div className="space-y-3 text-gray-600 dark:text-gray-400">
                    <p>
                      <strong className="text-gray-900 dark:text-white">Service Provision:</strong> We will provide all services as mentioned in the tour itinerary to the best of our ability.
                    </p>
                    <p>
                      <strong className="text-gray-900 dark:text-white">Accommodation & Transport:</strong> We guarantee the category of accommodation and transport booked. However, specific hotels/vehicles are subject to availability.
                    </p>
                    <p>
                      <strong className="text-gray-900 dark:text-white">Modifications:</strong> In case of unavoidable circumstances, we reserve the right to modify the itinerary. Suitable alternatives of equal value will be provided.
                    </p>
                    <p>
                      <strong className="text-gray-900 dark:text-white">24/7 Support:</strong> We provide round-the-clock customer support during the tour for any emergencies or assistance.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Force Majeure */}
            <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-md">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-orange-600 dark:text-orange-400" />
                  </div>
                </div>
                <div className="flex-1">
                  <h2 className="text-gray-900 dark:text-white mb-4">
                    Force Majeure
                  </h2>
                  <div className="space-y-3 text-gray-600 dark:text-gray-400">
                    <p>
                      tripsiIndia shall not be liable for any failure to perform its obligations due to circumstances beyond its reasonable control, including but not limited to:
                    </p>
                    <ul className="space-y-2 pl-5">
                      <li className="flex items-start space-x-2">
                        <span className="text-orange-600 dark:text-orange-400 mt-1">•</span>
                        <span>Natural disasters (earthquakes, floods, landslides, etc.)</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-orange-600 dark:text-orange-400 mt-1">•</span>
                        <span>Political unrest, strikes, or civil disturbances</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-orange-600 dark:text-orange-400 mt-1">•</span>
                        <span>Government restrictions or regulations</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-orange-600 dark:text-orange-400 mt-1">•</span>
                        <span>Pandemics or health emergencies</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="text-orange-600 dark:text-orange-400 mt-1">•</span>
                        <span>Flight cancellations or delays by airlines</span>
                      </li>
                    </ul>
                    <p className="pt-2">
                      In such cases, we will work to provide the best possible alternative arrangements. However, no refunds will be provided for circumstances beyond our control.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-lg p-8">
              <h2 className="text-gray-900 dark:text-white mb-4">
                Important Notes
              </h2>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 dark:text-orange-400 mt-1">•</span>
                  <span>All prices are quoted in Indian Rupees (INR) and are subject to change without notice</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 dark:text-orange-400 mt-1">•</span>
                  <span>Check-in time is typically 2:00 PM and check-out time is 11:00 AM at most hotels</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 dark:text-orange-400 mt-1">•</span>
                  <span>Children below 5 years travel free (without extra bed). Children 5-12 years get 50% discount</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 dark:text-orange-400 mt-1">•</span>
                  <span>Triple occupancy is subject to availability and room size constraints</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 dark:text-orange-400 mt-1">•</span>
                  <span>Itinerary timings are approximate and may vary due to traffic or other factors</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 dark:text-orange-400 mt-1">•</span>
                  <span>Entry fees to monuments and attractions are subject to change by authorities</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-orange-600 dark:text-orange-400 mt-1">•</span>
                  <span>We recommend arriving at least 1 day before high-altitude tours for acclimatization</span>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="text-center pt-8">
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                For any questions or clarifications regarding these terms and conditions, please contact us:
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="mailto:info@tripsiindia.com"
                  className="text-orange-600 dark:text-orange-400 hover:underline"
                >
                  info@tripsiindia.com
                </a>
                <span className="text-gray-400 hidden sm:inline">|</span>
                <a
                  href="tel:+919876543210"
                  className="text-orange-600 dark:text-orange-400 hover:underline"
                >
                  +91 98765 43210
                </a>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-6">
                Last updated: November 26, 2024
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
