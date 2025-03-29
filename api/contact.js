export default function handler(req, res) {
  if (req.method === 'POST') {
    // Get contact data from request body
    const { name, email, subject, message } = req.body;
    
    // Here you would typically send this data to an email service
    // For now, we'll just return a success response
    
    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'Validation error',
        errors: ['All fields are required']
      });
    }
    
    // Return success response
    return res.status(200).json({
      success: true,
      message: 'Message sent successfully!'
    });
  } else {
    // Handle any other HTTP method
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ message: `Method ${req.method} Not Allowed` });
  }
}