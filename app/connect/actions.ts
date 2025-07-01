"use server";

import { Client } from "@notionhq/client";

// Initialize the Notion client with your API key from environment variables
const notion = new Client({ auth: process.env.NOTION_API_KEY });

// This is the main function that will be called by the form
export async function submitContactForm(prevState: any, formData: FormData) {
  // Get all data from the form using their 'name' attributes
  const name = formData.get("your_name") as string;
  const emailAddress = formData.get("contact_email") as string;
  const companyName = formData.get("company_name") as string;
  const phoneNumber = formData.get("phone_number") as string; // ADDED
  const projectType = formData.get("project_type") as string;
  const monthlyBudget = formData.get("budget_range") as string;
  const timeline = formData.get("timeline") as string;
  const primaryChallenge = formData.get("primary_challenge") as string;
  const marketingStack = formData.get("marketing_stack") as string;

  // Basic validation to ensure required fields are filled
  if (!name || !emailAddress) {
    return { message: "Error: Name and Email are required.", type: "error" };
  }

  try {
    // Attempt to create a new page (row) in your Notion database
    await notion.pages.create({
      parent: { database_id: process.env.NOTION_DATABASE_ID! },
      
      // Map form data to your Notion database properties
      properties: {
        "Name": {
          title: [{ text: { content: name } }],
        },
        "Email Address": {
          email: emailAddress,
        },
        "Company Name": {
          rich_text: [{ text: { content: companyName } }],
        },
        // ADDED: Phone Number property
        "Phone Number": {
            phone_number: phoneNumber,
        },
        "Project Type": {
          rich_text: [{ text: { content: projectType } }],
        },
        "Monthly Marketing Budget": {
          rich_text: [{ text: { content: monthlyBudget } }],
        },
        "Implementation Timeline": {
          rich_text: [{ text: { content: timeline } }],
        },
        "Primary Challenge": {
          rich_text: [{ text: { content: primaryChallenge } }],
        },
        "Current Marketing Stack": {
          rich_text: [{ text: { content: marketingStack } }],
        },
      },
    });

    // If successful, return a success message
    return { message: "Thank you! We will be in touch shortly.", type: "success" };
  } catch (error) {
    // If there's an error, log it to the server console and return an error message
    console.error("Notion API Error:", error);
    return { message: "Server error. Please check your Notion property names and types.", type: "error" };
  }
}
