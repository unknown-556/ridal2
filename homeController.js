import home from "./home.js";



export const homeroute = async (req, res) => {
    {
        const  {
            phoneNumber
      } = req.body

      const newhome = new home({
        phoneNumber
      })

      await newhome.save()
            console.log('registered succesfully',newhome)
            return res.redirect('driver-sign-up.html')
    }
}

export default homeroute