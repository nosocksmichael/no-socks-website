"use server";

import { Client } from "@notionhq/client";

// Define a more specific type for the form's state, including the GTM event data
type FormState = {
  message: string;
  type: string;
  submissionData?: {
    event: string;
    value: number; // Optional: Assign a monetary value to the conversion
    currency: string; // Optional: Currency for the value
  };
};

const notion = new Client({ auth: process.env.NOTION_API_KEY });

export async function submitContactForm(prevState: any, formData: FormData): Promise<FormState> {
  // Get all data from the form using their 'name' attributes
  const name = formData.get("your_name") as string;
  const emailAddress = formData.get("contact_email") as string;
  const companyName = formData.get("company_name") as string;
  const phoneNumber = formData.get("phone_number") as string;
  const projectType = formData.get("project_type") as string;
  const monthlyBudget = formData.get("budget_range") as string;
  const timeline = formData.get("timeline") as string;
  const primaryChallenge = formData.get("primary_challenge") as string;
  const marketingStack = formData.get("marketing_stack") as string;

  // Basic validation
  if (!name || !emailAddress) {
    return { message: "Error: Name and Email are required.", type: "error" };
  }

  try {
    const properties: any = {
      "Name": { title: [{ text: { content: name } }] },
      "Email Address": { email: emailAddress },
      "Company Name": { rich_text: [{ text: { content: companyName } }] },
      "Project Type": { rich_text: [{ text: { content: projectType } }] },
      "Monthly Marketing Budget": { rich_text: [{ text: { content: monthlyBudget } }] },
      "Implementation Timeline": { rich_text: [{ text: { content: timeline } }] },
      "Primary Challenge": { rich_text: [{ text: { content: primaryChallenge } }] },
      "Current Marketing Stack": { rich_text: [{ text: { content: marketingStack } }] },
    };

    if (phoneNumber) {
      properties["Phone Number"] = { phone_number: phoneNumber };
    }

    await notion.pages.create({
      parent: { database_id: process.env.NOTION_DATABASE_ID! },
      properties: properties,
    });

    // If successful, return a success message AND the dataLayer event data
    return {
      message: "Thank you! We will be in touch shortly.",
      type: "success",
      submissionData: {
        event: "generate_lead", // This is the custom event name for GTM
        value: 50, // Example value: Assign a monetary value to a lead
        currency: "USD",
      },
    };
  } catch (error) {
    console.error("Notion API Error:", error);
    return { message: "Server error. Please check your Notion property names and types.", type: "error" };
  }
}
