export default {
    title: "Partner",
    name: "partner",
    type: "document",
    fields: [
        {
            title: "Partner name",
            name: "partnerName",
            type: "string",
            validation: Rule => Rule.required()
        },
        {
            title: "Partner image",
            name: "partnerImage",
            type: "image",
            validation: Rule => Rule.required()
        },
        {
            title: "Partner URL",
            name: "partnerUrl",
            type: "url",
            validation: Rule => Rule.required()
        }
    ]
}
