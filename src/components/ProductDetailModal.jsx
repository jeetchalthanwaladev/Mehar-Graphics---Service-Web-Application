import React, { useState, useEffect } from "react";
import { X, MessageCircle } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ProductDetailModal({
    isOpen,
    onClose,
    product,
    finishOptions = null,
    showGsm = true,
    showRivets = false
}) {
    const [gsm, setGsm] = useState("");
    const [finish, setFinish] = useState("");
    const [rivets, setRivets] = useState("No");
    const [quantity, setQuantity] = useState("100");
    const [customGsm, setCustomGsm] = useState("");

    // Reset fields when product changes or modal opens
    useEffect(() => {
        if (isOpen) {
            setGsm("");
            setFinish("");
            setRivets("No");
            setQuantity("100");
            setCustomGsm("");
        }
    }, [isOpen, product]);

    if (!isOpen || !product) return null;

    const defaultFinishOptions = {
        "Standard Finishes": ["Matte", "Glossy"],
        "Premium Finishes": ["UV Spot", "Gold Foil", "Silver Foil", "Embossed", "Laminated"]
    };

    const displayFinishOptions = finishOptions || defaultFinishOptions;

    const gsmOptions = ["80 GSM", "100 GSM", "130 GSM", "170 GSM", "210 GSM", "250 GSM", "300 GSM", "350 GSM", "Other"];

    const handleWhatsAppEnquiry = () => {
        const phoneNumber = "+917984472110";
        let message = `*Product Enquiry*\n\n`;
        message += `*Product Name:* ${product.name}\n`;
        if (showGsm) {
            message += `*GSM:* ${gsm === "Other" ? customGsm : gsm}\n`;
        }
        message += `*Finish:* ${finish}\n`;
        if (showRivets) {
            message += `*Rivets/Eyelets:* ${rivets}\n`;
        }
        message += `*Quantity:* ${quantity}\n`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
    };

    return (
        <div
            className="product-modal-overlay"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(8px)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 1000,
                animation: 'fadeIn 0.3s ease'
            }}
            onClick={onClose}
        >
            <div
                className="product-modal-content"
                style={{
                    backgroundColor: '#fff',
                    width: 'min(650px, 95%)',
                    maxHeight: '90vh',
                    borderRadius: '24px',
                    overflowY: 'auto',
                    position: 'relative',
                    padding: '2.5rem',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                    animation: 'slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
                onClick={e => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: '1.5rem',
                        right: '1.5rem',
                        background: '#f1f5f9',
                        border: 'none',
                        borderRadius: '50%',
                        padding: '8px',
                        cursor: 'pointer',
                        color: '#64748b',
                        transition: 'all 0.2s',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                    onMouseOver={e => {
                        e.currentTarget.style.backgroundColor = '#e2e8f0';
                        e.currentTarget.style.color = '#0f172a';
                    }}
                    onMouseOut={e => {
                        e.currentTarget.style.backgroundColor = '#f1f5f9';
                        e.currentTarget.style.color = '#64748b';
                    }}
                >
                    <X size={20} />
                </button>

                <h2 style={{
                    fontSize: '1.8rem',
                    fontWeight: 800,
                    color: '#043F4A',
                    marginBottom: '0.5rem',
                    paddingRight: '2rem'
                }}>
                    {product.name}
                </h2>
                <p style={{ color: '#64748b', marginBottom: '2rem', fontSize: '0.95rem' }}>
                    Select your custom specifications to receive an accurate quote on WhatsApp.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                    {/* GSM Option */}
                    {showGsm && (
                        <div>
                            <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.75rem', color: '#1e293b' }}>
                                Select GSM (Paper Thickness)
                            </label>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                                {gsmOptions.map(option => (
                                    <button
                                        key={option}
                                        onClick={() => setGsm(option)}
                                        style={{
                                            padding: '8px 16px',
                                            borderRadius: '30px',
                                            border: gsm === option ? '2px solid #043F4A' : '1px solid #e2e8f0',
                                            backgroundColor: gsm === option ? '#f0fdfa' : '#fff',
                                            color: gsm === option ? '#043F4A' : '#64748b',
                                            fontSize: '0.85rem',
                                            fontWeight: 600,
                                            cursor: 'pointer',
                                            transition: 'all 0.2s'
                                        }}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>
                            {gsm === "Other" && (
                                <input
                                    type="text"
                                    placeholder="Enter custom GSM (e.g. 400 GSM)"
                                    value={customGsm}
                                    onChange={(e) => setCustomGsm(e.target.value)}
                                    style={{
                                        width: '100%',
                                        padding: '12px 16px',
                                        marginTop: '10px',
                                        borderRadius: '12px',
                                        border: '1px solid #e2e8f0',
                                        fontSize: '0.9rem'
                                    }}
                                />
                            )}
                        </div>
                    )}

                    {/* Finish Option */}
                    <div>
                        <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.75rem', color: '#1e293b' }}>
                            Select Finish
                        </label>
                        {Object.entries(displayFinishOptions).map(([category, options]) => (
                            <div key={category} style={{ marginBottom: '1rem' }}>
                                <span style={{ fontSize: '0.75rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: 700, display: 'block', marginBottom: '0.5rem' }}>
                                    {category}
                                </span>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                                    {options.map(option => (
                                        <button
                                            key={option}
                                            onClick={() => setFinish(option)}
                                            style={{
                                                padding: '8px 16px',
                                                borderRadius: '30px',
                                                border: finish === option ? '2px solid #043F4A' : '1px solid #e2e8f0',
                                                backgroundColor: finish === option ? '#f0fdfa' : '#fff',
                                                color: finish === option ? '#043F4A' : '#64748b',
                                                fontSize: '0.85rem',
                                                fontWeight: 600,
                                                cursor: 'pointer',
                                                transition: 'all 0.2s'
                                            }}
                                        >
                                            {option}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Rivets Option */}
                    {showRivets && (
                        <div>
                            <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.75rem', color: '#1e293b' }}>
                                Need Rivets/Eyelets?
                            </label>
                            <div style={{ display: 'flex', gap: '1.5rem' }}>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.9rem', color: '#475569' }}>
                                    <input
                                        type="radio"
                                        name="rivets"
                                        value="Yes"
                                        checked={rivets === "Yes"}
                                        onChange={() => setRivets("Yes")}
                                        style={{ accentColor: '#043F4A', width: '18px', height: '18px' }}
                                    />
                                    Yes
                                </label>
                                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '0.9rem', color: '#475569' }}>
                                    <input
                                        type="radio"
                                        name="rivets"
                                        value="No"
                                        checked={rivets === "No"}
                                        onChange={() => setRivets("No")}
                                        style={{ accentColor: '#043F4A', width: '18px', height: '18px' }}
                                    />
                                    No
                                </label>
                            </div>
                        </div>
                    )}

                    {/* Quantity Option */}
                    <div>
                        <label style={{ display: 'block', fontWeight: 700, marginBottom: '0.75rem', color: '#1e293b' }}>
                            Approximate Quantity
                        </label>
                        <input
                            type="number"
                            min="1"
                            value={quantity}
                            onChange={(e) => setQuantity(e.target.value)}
                            style={{
                                width: '100%',
                                padding: '12px 16px',
                                borderRadius: '12px',
                                border: '1px solid #e2e8f0',
                                fontSize: '0.9rem'
                            }}
                        />
                    </div>

                    {/* Action Button */}
                    <button
                        onClick={handleWhatsAppEnquiry}
                        disabled={!finish || (showGsm && !gsm)}
                        style={{
                            marginTop: '1rem',
                            backgroundColor: (!finish || (showGsm && !gsm)) ? '#94a3b8' : '#25D366',
                            color: '#fff',
                            border: 'none',
                            padding: '16px',
                            borderRadius: '16px',
                            fontWeight: 800,
                            fontSize: '1rem',
                            cursor: (!finish || (showGsm && !gsm)) ? 'not-allowed' : 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                        }}
                        onMouseOver={e => {
                            if (finish && (!showGsm || gsm)) {
                                e.currentTarget.style.transform = 'translateY(-3px)';
                                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(37, 211, 102, 0.3)';
                            }
                        }}
                        onMouseOut={e => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = 'none';
                        }}
                    >
                        <FaWhatsapp size={24} />
                        Enquire on WhatsApp
                    </button>

                    <p style={{ textAlign: 'center', fontSize: '0.75rem', color: '#94a3b8', marginTop: '-0.5rem' }}>
                        *We usually respond within 15-30 minutes.
                    </p>
                </div>
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(40px) scale(0.95); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
                .product-modal-content::-webkit-scrollbar {
                    width: 8px;
                }
                .product-modal-content::-webkit-scrollbar-track {
                    background: #f1f5f9;
                    border-radius: 0 24px 24px 0;
                }
                .product-modal-content::-webkit-scrollbar-thumb {
                    background: #cbd5e1;
                    border-radius: 10px;
                }
                .product-modal-content::-webkit-scrollbar-thumb:hover {
                    background: #94a3b8;
                }
            `}</style>
        </div>
    );
}
