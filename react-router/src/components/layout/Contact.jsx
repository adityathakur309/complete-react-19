import { Form } from "react-router-dom"


 export let getFormData = async ({request}) =>{
     try{
        let res = await request.formData();
    let data = Object.fromEntries(res);
    
    
    return null

     } catch(error){
        console.log(error);
        
     } 
    

}
export const ContactPage = () =>{
    console.log("rendred");
    
    return (
        <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-6 lg:px-20">
          <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
          <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
            <Form method="POST">
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  autoComplete="off"
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                  placeholder="Your Name"
                 required/>
              </div>
  
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  autoComplete="off"
                  name="email"
                  className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                  placeholder="Your Email"
                 required/>
              </div>
  
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-4 py-2 border resize-none rounded-lg text-gray-700 focus:outline-none focus:border-indigo-500"
                  rows="5"
                  placeholder="Your Message"
                 required></textarea>
              </div>
  
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-indigo-500 cursor-pointer outline-none border-none text-white font-bold py-2 px-6 rounded-lg hover:bg-indigo-600 transition duration-300"
                >
                  Send Message
                </button>
              </div>
            </Form>
          </div>
        </div>
      </section>
    )
}