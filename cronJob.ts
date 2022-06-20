import cron from "node-cron";
import Invoice from "./src/models/invoiceModel"

import moment from "moment";
import   sendMail from "./src/utility/emails"

//this Job sends email to clients whose payment has passed due date twice daily, by 12pm and 6pm
cron.schedule("00 12, 18 * * *", async () => {
  let date = moment();
  date.toISOString();

  const todos = await Invoice.find({
      dueDate: { $gte: date },
  });

  if (todos.length > 0) {
    const batchSize = 5;
    for (let i = 0; i < todos.length; i = i + batchSize) {
      const currentBatch = todos.slice(i, i + batchSize);
      const currentBatchPromise = currentBatch.map(
        (item) =>
          new Promise(async (resolve, reject) => {
            try {
              const userEmail = item.user.email
              const clientEmail = item.client.email
            
              const message = `Hi ${item.client.name} <br> Your payment is past due date <br> Your services are ${item.description} `
              

               const mail = sendMail(userEmail, clientEmail, message )

              resolve(mail);
            } catch (err) {
              reject(err);
            }
          })
      );
      await Promise.all(currentBatchPromise)
        .then((values) => {
          console.log(values);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }
});

