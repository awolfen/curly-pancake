import SectionHeading from "./SectionHeading";

export default function AboutSection() {
  return (
    <>
      <SectionHeading>About This Experiment</SectionHeading>
      <p className="text-zinc-600 dark:text-zinc-300 mb-6">
        This A/B test randomly assigns each visitor to either the
        &quot;cat&quot; group or the &quot;dog&quot; group. Users in each group
        see only their assigned animal type. The experiment tracks how many
        pictures each user views before ending their session.
      </p>
      <p className="text-zinc-600 dark:text-zinc-300 mb-6">
        The results are stored in Firebase Firestore and aggregated to show the
        average number of pictures viewed per user for each animal type. This
        helps determine which type of content is more engaging.
      </p>
    </>
  );
}
