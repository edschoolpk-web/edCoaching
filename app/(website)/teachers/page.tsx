import Link from "next/link";
import { TeacherList } from "../about/teacher-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Teachers | Engineers & Doctors School",
  description:
    "Meet the dedicated team of educators at Engineers & Doctors School.",
  alternates: {
    canonical: "https://edschool.pk/teachers",
  },
};

export default function TeachersPage() {
  return (
    <>
      <section className="pager-section">
        <div className="container">
          <div className="pager-content text-center">
            <h2>Our Teachers</h2>
            <ul>
              <li>
                <Link href="/" title="Home">
                  Home
                </Link>
              </li>
              <li>
                <span>Teachers</span>
              </li>
            </ul>
          </div>
          <h2 className="page-titlee">E&D</h2>
        </div>
      </section>

      <div className="section-title teachercontent text-center mt-5">
        <p>
          At Engineers & Doctors Inn (E&D), our strength lies in our highly
          experienced and qualified teaching team. All our teachers are college
          lecturers with years of academic expertise, dedicated to providing
          top-class coaching, personalized guidance, and strong conceptual
          understanding. They focus on building confidence, problem-solving
          skills, and exam readiness in every student, ensuring that each
          learner receives the support and mentorship needed to achieve academic
          success
        </p>
      </div>

      <section className="teachers-section">
        <div className="container">
          <div className="teachers">
            <div className="row">
              <TeacherList />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
