import { ContactsSection } from "@/features/contacts/ui/ContactsSection/ContactsSection";
import { MapSection } from "@/features/contacts/ui/MapSection/MapSection";
import { Breadcrumbs } from "@/shared/ui/Breadcrumbs";

export default function Contacts() {
  return (
    <main>
      <Breadcrumbs />
      <ContactsSection/>
      <MapSection/>
    </main>
  );
}