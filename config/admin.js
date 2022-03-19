module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '49d1b4aeaa0a14ad1633a116c1ff1bdc'),
  },
});
