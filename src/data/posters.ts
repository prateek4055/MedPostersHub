export const posters: Poster[] = [
  {
    id: "1",
    title: "Human Muscular System",
    description:
      "Hand-drawn physiotherapy style muscular system chart showing anterior and posterior muscle groups. Perfect for BPT students and clinic walls.",
    image: "/posters/muscular-system.jpg",
    category: "Anatomy",
    sizes: ["A3 (29.7 x 42 cm)", "A2 (42 x 59.4 cm)", "A1 (59.4 x 84.1 cm)"],
    quality:
      "Premium 250–300 GSM art paper with high-quality color printing, suitable for framing in clinics and classrooms.",
    comboSuggestions: ["Human Skeletal System", "Trigger Points & Pain Referral"],
    price: { small: 299, medium: 399, large: 499 },
  },
  {
    id: "2",
    title: "Human Skeletal System",
    description:
      "Clean skeletal system illustration for ortho and physiotherapy education. All major bones labeled and clinically relevant.",
    image: "/posters/skeletal-system.jpg",
    category: "Anatomy",
    sizes: ["A3 (29.7 x 42 cm)", "A2 (42 x 59.4 cm)", "A1 (59.4 x 84.1 cm)"],
    quality:
      "Premium 250–300 GSM art paper with fade-resistant inks, ideal for long-term clinic and classroom display.",
    comboSuggestions: ["Human Muscular System", "Spinal Column & Vertebrae"],
    price: { small: 299, medium: 399, large: 499 },
  },
  {
    id: "3",
    title: "Spinal Column & Vertebrae",
    description:
      "Detailed spinal anatomy showing cervical, thoracic, lumbar and sacral regions. Ideal for physiotherapy, chiropractic and ortho OPD.",
    image: "/posters/spine.jpg",
    category: "Physiotherapy",
    sizes: ["A3 (29.7 x 42 cm)", "A2 (42 x 59.4 cm)", "A1 (59.4 x 84.1 cm)"],
    quality:
      "Thick 250–300 GSM art paper with sharp spinal detailing, perfect for spinal rehab and ortho clinics.",
    comboSuggestions: ["Posture Correction Guide", "Back Pain Points"],
    price: { small: 199, medium: 299, large: 399 },
  },
  {
    id: "4",
    title: "Knee Joint Anatomy",
    description:
      "Cross-sectional knee joint poster with ACL, PCL, menisci and ligaments. The best quick reference for sports physio and ortho.",
    image: "/posters/knee.jpg",
    category: "Orthopedics",
    sizes: ["A3 (29.7 x 42 cm)", "A2 (42 x 59.4 cm)", "A1 (59.4 x 84.1 cm)"],
    quality:
      "Premium 250–300 GSM laminated art paper designed for daily use in ortho and sports physio clinics.",
    comboSuggestions: ["Hip Joint Anatomy", "Shoulder Complex Anatomy"],
    price: { small: 249, medium: 349, large: 449 },
  },
  {
    id: "5",
    title: "Trigger Points & Pain Referral",
    description:
      "Detailed trigger point mapping with major pain patterns. A must-have for dry needling, acupuncture and manual therapy.",
    image: "/posters/trigger-points.jpg",
    category: "Physiotherapy",
    sizes: ["A3 (29.7 x 42 cm)", "A2 (42 x 59.4 cm)", "A1 (59.4 x 84.1 cm)"],
    quality:
      "High-quality 250–300 GSM art paper with clear trigger point markings for manual therapy and rehab centers.",
    comboSuggestions: ["Myofascial Meridians", "Stretching Exercises Guide"],
    price: { small: 299, medium: 399, large: 499 },
  },
  {
    id: "6",
    title: "Shoulder Complex Anatomy",
    description:
      "Anatomy of the shoulder joint with rotator cuff, labrum, bursae and capsule layers. Ideal for gym physios and ortho OPDs.",
    image: "/posters/shoulder.jpg",
    category: "Orthopedics",
    sizes: ["A3 (29.7 x 42 cm)", "A2 (42 x 59.4 cm)", "A1 (59.4 x 84.1 cm)"],
    quality:
      "Premium 250–300 GSM art paper with crisp shoulder joint detailing, perfect for gyms and ortho OPDs.",
    comboSuggestions: ["Knee Joint Anatomy", "Elbow & Forearm Anatomy"],
    price: { small: 199, medium: 299, large: 399 },
  },
  {
    id: "7",
    title: "Nervous System Overview",
    description:
      "Clear breakdown of CNS & PNS with spinal nerves and brain regions. Excellent for neuro physio and student learning.",
    image: "/posters/nervous-system.jpg",
    category: "Anatomy",
    sizes: ["A3 (29.7 x 42 cm)", "A2 (42 x 59.4 cm)", "A1 (59.4 x 84.1 cm)"],
    quality:
      "Premium 250–300 GSM art paper with clear nervous system labeling for neuro physio and teaching walls.",
    comboSuggestions: ["Dermatome Chart", "Brain Anatomy"],
    price: { small: 299, medium: 399, large: 499 },
  },
  {
    id: "8",
    title: "Stretching Exercises Guide",
    description:
      "Full-body stretching reference with rehab-safe positions. Ideal for gym, OPD and patient counseling.",
    image: "/posters/stretching.jpg",
    category: "Exercise",
    sizes: ["A3 (29.7 x 42 cm)", "A2 (42 x 59.4 cm)", "A1 (59.4 x 84.1 cm)"],
    quality:
      "Durable 250–300 GSM art paper, patient-friendly layout, suitable for gyms, OPDs and rehab centers.",
    comboSuggestions: ["Resistance Band Exercises", "Core Strengthening"],
    price: { small: 199, medium: 299, large: 399 },
  },
];
export const categories = Array.from(
  new Set(posters.map((poster) => poster.category))
);