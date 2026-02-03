import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleAuth = async () => {
      const { data, error } = await supabase.auth.getSession();

      if (error) {
        console.error("Auth callback error:", error);
        navigate("/auth");
        return;
      }

      if (data.session) {
        // login / reset pass OK
        navigate("/");
      } else {
        // fallback
        navigate("/auth");
      }
    };

    handleAuth();
  }, [navigate]);

  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h2>Đang xác thực tài khoản...</h2>
      <p>Đợi xíu nha </p>
    </div>
  );
};

export default AuthCallback;
