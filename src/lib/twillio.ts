import sgMail from "@sendgrid/mail";

const SEND_GRID_API = process.env.SEND_GRID_API!;
const SEND_GRID_FROM_NAME = process.env.SEND_GRID_FROM_NAME!;
const SEND_GRID_FROM_EMAIL = process.env.SEND_GRID_FROM_EMAIL!;

export type SendEmail = {
  data: { [key: string]: string };
  subject: string;
  templateId: string;
  to: string;
};

export async function sendEmail({ data, subject, templateId, to }: SendEmail) {
  const msg: sgMail.MailDataRequired = {
    to,
    from: { name: SEND_GRID_FROM_NAME, email: SEND_GRID_FROM_EMAIL },
    subject: subject,
    templateId: templateId,
    dynamicTemplateData: data,
  };
  sgMail.setApiKey(SEND_GRID_API!);

  await sgMail.send(msg);

  return true;
}

