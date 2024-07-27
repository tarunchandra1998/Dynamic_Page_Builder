import { initializeApp, applicationDefault, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import { FIREBASE_SERVICE_ACCOUNT_KEY } from "./config.js";

// const serviceAccount = JSON.parse(FIREBASE_SERVICE_ACCOUNT_KEY);

const serviceAccount = {
  type: "service_account",
  project_id: "dynamic-page-builder",
  private_key_id: "00efd551f7c4f88c6d0c5d7434914a35c7646b40",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC6lDAu6dhs8ajz\nM5P1rLnct6hQurYZuLNTbiGs0MYhBLcIOZ/XTC157MujoVuu3Q3NjwAwpe7Y8LZD\ncGfZ92FUFuSQWKYWbewk1GqPWz27XntqeRpaPL2em3PeaDS+F7D56wWjb6BIS2PR\n9NYY6wr1NgeWwXX6rokAdiiFVCEd0AcPkSbKxTQ7K/rwbUXi+vp1VbA7rvlomvIP\nwFLcz2gSvy/z5djFUKUz4lK6YQ96srLqYaevE5wPKgwC94S0USTKdRt5siWxJHGS\nHEmhncYSkpkF9JrXqIrL/Ga6v03Mknlh0o6iE8/gRITqc233gdRtUMpiDpB9K/1p\nqD1mFBF9AgMBAAECggEAKzdf4b3wj2t6QrrTrrgPZPx1VB2rSFHr14tO6YSCH+vD\nqXgPegL/FZqvoHsjjWFObSqOVLZamI1I6l4C8A3I0X1r+7NM5S0Y4X8CH6p2pgvA\ncm0SmYwwL6i6Me3ZKZ67M2goqi6U5anwuRUI8kSfCSU2pMiy1xnOSfkUca2G7ix3\nxG/zD54v+hBm7yGAc9RhayzZ9A3TO9Elr3eMAWTeBARm6/yDxOayNUiUGHTF9wW5\nNx8mmxzStVZunEnNJJPeI65Qb06mRsbZqRK0seuaeaEoUpbzhsA1/4gHUJO3d0rl\n8T64GHbY4ZD3JC8RpixCeVPTXqZtDZKWlc12AjHYUQKBgQDotdUEFWcXv0fXXrZy\nfErCNBohzNq4K2Gs/JJsaTrCzKvDXXRHJvEepVs2M0633E96r4PiFeiXBsYPtcp6\n3MfK/hoDmZa9D7aboYDakDsuyj7j+GaW/h2CdUOpRIggjMcG6Y6AoXNGv8VnOfj7\npxDkqFTrhoGH5QJctsFmn+2emwKBgQDNQHF4DJGWgn7ebvdjq2nF/WZfZmaU273d\nhI3VTS7LkxI6U1VO8nNff9ezExkdVtIdgK2lUMvOjvLLFE12EhKDSsNQCjc95/hi\nqCbnzkKcDRsT5un9rrZT0+NTNN2pDMHY71ENI6e7GxGe/ENNmLka2Qwdr5sjGuaS\nl/xLJLpFxwKBgFMhwfs3eiCtoIh7uUmkxUAjRMKWX/wy4y3c/KHl5av5WdLs68EP\nVEvSXoc6RQDBn1MAqGh30yNAtDighLjnbihCJiDrGUJo/p8STunFZJ8OePEPp/aA\nySH1qjop1Udrgx4hCVtCUeAQWgDKYPvlbs+AovWQk21sji94yhZTQ5vJAoGATA9b\nfR87PEkzdn4skvTMh6A1tZie3v7nRxV98dNeSfZARPjong7ejj8z0Zp8LhEkX+Z1\nctOUEwGKG5N0eRKNZbXo1tpSSlCSDQ0/DZuzt1xr8l4Zy/ZYfowAq67ljWW62Acn\nQ/U4jO+lAgN9dV3pCnfwM3gFx2aKlzxXNAlyNbUCgYEA4HTxs8fTc85vvP+Mz4Nw\nqY1g4ulfnuJuzFQTAGMyZcVFVNiRW3CSxaRpRjMQh9Aoa9yJRqTu3UHTTqnbbtcX\noIwrOaNX8kgDaEp3LyjXnD17GhhZp20Xut3M5KN9k+qdQUscaiELXrn9/p97IStm\nLhOd8TPvjwuEoy3oIKJ0RUs=\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-7yjru@dynamic-page-builder.iam.gserviceaccount.com",
  client_id: "103680264818583018847",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-7yjru@dynamic-page-builder.iam.gserviceaccount.com",
};

const app = initializeApp({
  credential: cert(serviceAccount),
});

export const db = getFirestore(app);
