import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Privacy at Jevelon Technologies",
      content: "Jevelon Technologies commits and complies to data privacy laws in the countries where it does business and maintains integrity of the personal information in the company's possession. Read about our data protection and privacy statement and important privacy notices and policies. At Jevelon Technologies, accessible from jevelon.com, one of our chief priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Jevelon Technologies and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us. This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collected in Jevelon Technologies. This policy is not applicable to any information collected offline or via channels other than this website."
    },
    {
      title: "Consent",
      content: "By using our website, you hereby consent to our Privacy Policy and agree to its terms."
    },
    {
      title: "Information We Collect",
      content: "The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information. If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide. When you register for an Account or request our services (web development, mobile app development, digital marketing, etc.), we may ask for your contact information, including items such as name, company name, address, email address, and telephone number."
    },
    {
      title: "How We Use Your Information",
      content: "We use the information we collect in various ways, including to: Provide, operate, and maintain our website and services; Improve, personalize, and expand our website and service offerings; Understand and analyze how you use our website; Develop new products, services, features, and functionality for web development, mobile app development, and digital marketing; Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to our services, and for marketing and promotional purposes; Send you emails about our services and updates; Find and prevent fraud; Process payments and manage client relationships."
    },
    {
      title: "Log Files",
      content: "Jevelon Technologies follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this as part of hosting services' analytics. The information collected by log files includes internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information."
    },
    {
      title: "Cookies And Web Beacons",
      content: "Like any other website, Jevelon Technologies uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information. For more general information on cookies, please read 'What Are Cookies'."
    },
    {
      title: "Advertising Partners Privacy Policies",
      content: "You may consult this list to find the Privacy Policy for each of the advertising partners of Jevelon Technologies. Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Jevelon Technologies, which are sent directly to users' browsers. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit. Note that Jevelon Technologies has no access to or control over these cookies that are used by third-party advertisers."
    },
    {
      title: "Third Party Privacy Policies",
      content: "Jevelon Technologies' Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites."
    },
    {
      title: "CCPA Privacy Rights (Do Not Sell My Personal Information)",
      content: "Under the CCPA, among other rights, California consumers have the right to: Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers. Request that a business delete any personal data about the consumer that a business has collected. If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us."
    },
    {
      title: "GDPR Data Protection Rights",
      content: "We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following: The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service. The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete. The right to erasure – You have the right to request that we erase your personal data, under certain conditions. The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions. The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions. The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions. If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us."
    },
    {
      title: "Children's Information",
      content: "Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity. Jevelon Technologies does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to remove such information from our records as soon as possible."
    },
    {
      title: "Changes To This Privacy Policy",
      content: "We value your trust in us, and we update our privacy policy from time to time. We will notify you about new updates or changes in policy by posting on this page. We will let you know by email or by a prominent notice on our service, prior to the change becoming effective and update the effective date on top of the page. You are advised to periodically review policy in case of changes."
    },
    {
      title: "Law And Jurisdiction",
      content: "By visiting the Website, or using any of our Services (web development, mobile app development, digital marketing, etc.), you agree that your Personal Information will be handled as described in this Policy. Your use of our Website or Services and any dispute over privacy, are subject to this Policy and our Website Terms of Use, including its applicable limitations on damages and the resolution of disputes. Jevelon Technologies Terms of Use are incorporated by reference into this Policy."
    },
    {
      title: "Contact Us",
      content: "For any legal concern/question, please contact us at hello@jevelon.com or through our contact form on the website."
    }
  ];

  return (
    <div className="pt-16 pb-20 bg-background min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 pt-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Privacy <span className="text-blue-400">Policy</span>
          </h1>
          <p className="text-muted-foreground">
            Last updated: August 1, 2025
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-6"
        >
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-blue-400">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{section.content}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}